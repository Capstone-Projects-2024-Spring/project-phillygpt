import mysql.connector
from mysql.connector import Error
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def connect_fetch_data():
    """Connects to MySQL database and fetches data"""
    try:
        # Connection parameters
        connection = mysql.connector.connect(
            host='ec2-3-13-209-241.us-east-2.compute.amazonaws.com',
            database='phillygpt',
            user=' ec2-user',
            password='vuwva8-vZgabt-zip5m'
        )
        logging.info("Setting MySql database connection parameters...")

        if connection.is_connected():
            db_info = connection.get_server_info()
            logging.info("Connected to MySql Server vestion: %s", db_info)
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM education LIMIT 10;")
            records = cursor.fetchall()
            
            for row in records:
                logging.info("Fetched data: %s", row)
                #print(row)

    except Error as e:
        logging.warning("Error connecting to MySql Database: %s", e)

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            logging.info("MySql Connection closed.")

if __name__ == '__main__':
    connect_fetch_data()