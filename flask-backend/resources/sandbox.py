from dotenv import load_dotenv
import os
import mysql.connector
import requests
from database_connection import get_database_uri, getField
from execute_sql_query import execute_sql_query

load_dotenv()

# Function to geocode an address
def geocode_address(address):
  # Encode the address for URL
  encoded_address = requests.utils.quote(address)
  url = f"https://maps.googleapis.com/maps/api/geocode/json?address={encoded_address}&key={os.getenv('GOOGLE_MAPS_API_KEY')}"
  response = requests.get(url)
  if response.status_code == 200:
    data = response.json()
    # Check for successful geocoding
    if data["status"] == "OK":
      location = data["results"][0]["geometry"]["location"]
      return location["lat"], location["lng"]
    else:
      print(f"Geocoding failed for address: {address}")
      return None, None
  else:
    print(f"Error fetching data from Google Maps API: {response.status_code}")
    return None, None
    return None, None


def main():
  schema = get_database_uri()
  key_list = ["adress", "ADDRESS", 'testing_location_address']
  for table in schema:
#     if 'X' in schema[table] and 'Y' in schema[table] :
#         print("this table has x,y" + table)
#         print("\n")
    for key in key_list:
      if key in schema[table] and ('X','Y') not in schema[table]:
        print(table)
        adresses = getField(key, table)
        alter_table = f"ALTER TABLE {table} ADD COLUMN latitude DECIMAL(10,6), ADD COLUMN longitude DECIMAL(10,6)"
        execute_sql_query(alter_table)
        for address in adresses:
                latitude, longitude = (91, 181)
                latitude, longitude = geocode_address(address)
                add_info = f"UPDATE {table} SET latitude = '{latitude}', longitude = '{longitude}' WHERE {key} = '{address}';"
                execute_sql_query(add_info)
                
        print("\n")
        break
      




if __name__ == '__main__':
  main()


