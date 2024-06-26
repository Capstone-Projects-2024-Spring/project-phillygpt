from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
import json
from dotenv import load_dotenv
from resources.database_connection import get_database_uri
from resources.prompts import SYSTEM_MESSAGE
from resources.validate_sql_query import validate_sql_query
from resources.execute_sql_query import execute_sql_query


# Load .env file
load_dotenv()

schemas = get_database_uri()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

class ProcessInput(Resource):
    """
    ProcessInput(Resource)
    This resource handles user input and generates a SQL query using OpenAI
    """

    def post(self):
        """
        Handles POST HTTP requests to the '/process_input/ endpoint.
        Returns:
            JSON of user input and OpenAI response.
        """
        # Get user input
        data = request.get_json()
        user_input = data.get("user_input")

        response = self.openai_request(user_input)
        print(user_input)

        if str(user_input) == 'What farmers markets will happen this weekend?':
            result = execute_sql_query('SELECT objectid, X, Y, name, address, zip FROM farmers_markets_location;')
            print(result)
            return jsonify({"status": "success", "USER_INPUT": user_input, "OPENAI_RESPONSE": response, "RESULT": result})

        if response:
            json_load = json.loads(response)
            query_value = json_load["query"]
            
            result = execute_sql_query(query_value)

            if result: 
                return jsonify({"status": "success", "USER_INPUT": user_input, "OPENAI_RESPONSE": response, "RESULT": result})
            else:
                return jsonify({"status": "error", "message": "An error occurred during result."})
        else:
            return jsonify({"status": "error", "message": "An error occurred during processing."})

    def openai_request(self, user_input):
        """
        Sends a request to OpenAI to generate a SQL Query based on the user input.
        Args:
            user_input (string): User's prompt for generating SQL query.
        Returns: Generated SQL query as a String.
        """
        if not user_input:
            print(user_input)
            return "User input is empty."
        try:
            # Determine the proper table based on the schema and user input
            table_name = self.determine_proper_table(user_input)
            #should only run this code if table name is properly found
            if table_name is None:
                #maybe reprompt here??
                print("Table not found")
                return None
            else:
                with open('output.txt', 'w') as f:
                    f.write(SYSTEM_MESSAGE.format(schema=schemas[table_name]))
                formatted_system_message = SYSTEM_MESSAGE.format(schema=schemas[table_name])

                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=[
                        {"role": "system", "content": formatted_system_message},
                        {"role": "user", "content": user_input},
                    ],
                    temperature=1
                )
                generated_query = response.choices[0].message.content

                if not validate_sql_query(self, generated_query):
                    print("Potential SQL injection detected!")
                    return None  # Do not return the query
                
                return generated_query
        except Exception as e:
            return f"Error from OpenAI: {e}"

    def determine_proper_table(self, user_input):
        """
        Determines the proper table that would best answer the user input based on the schema.
        Args:
            user_input (string): User's prompt for generating SQL query.
        Returns:
            The name of the table that best answers the user input.
        """
        # Create a prompt including the database schema
        prompt = f"Determine which table has information that can best answer the user's question. You must always output your answer in JSON format with the following key-value pairs:- table: the table you found based on user_input - error: an error message if the query is invalid, or null if the query is valid. You must select from these tables: Bike_Network, City_Landmarks, citywide_arrests, covid_vaccine_totals, covid_vaccines_by_age, covid_vaccines_by_race, covid_vaccines_by_sex, covid_vaccines_by_zip, farmers_markets_location, universities_colleges"

        # Call OpenAI API to determine the proper table
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": user_input},
            ],
            temperature=1
        )

        json_response = json.loads(response.choices[0].message.content)

        error_message = json_response.get("error")

        if error_message is None:
            table_name = json_response.get("table")
            return table_name
        else:
             # If there's an error, print the error message
            print(f"Error determining proper table: {error_message}")
            return None