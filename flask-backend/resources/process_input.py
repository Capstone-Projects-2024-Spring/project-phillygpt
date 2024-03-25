from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
from dotenv import load_dotenv

#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

class ProcessInput(Resource):
    """
    ProcessInput(Resource)
    This resouce handles user input and generates a SQL query using OpenAI
    """
    def post(self):
        """
        Handles POST HTTP requests to the '/process_input/ endpoint.
        Returns:
            JSON of user input and OpenAI response.
        """
        
        #get user input
        user_input = request.form.get("user_input")
        response = self.openai_request(user_input)
    
        return jsonify({"USER_INPUT" : user_input, 
                "OPENAI_RESPONSE" : response})
    

    def openai_request(self, user_input):
        """
        Sends a request to OpenAI to generate a SQL Query based on the user input.
        Args:
        user_input (string): User's prompt for generating SQL query.
        Returns: Generated SQL query as a String.
        """
        table_schema = """
        Table Name: FarmersMarkets
        Columns:
        objectid: Integer
        X: Float
        Y: Float
        name: String
        address: String
        zip: Integer
        hours_mon_start: Time
        hours_mon_end: Time
        ...
        season_closing_day: Integer
        """

        response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "Given the schema of a database table containing information about farmers' markets, including their location, hours of operation, and seasonality, generate a SQL query that addresses the user's request. Provide only the SQL statement."}, #THIS WILL NEED TO BE MODIFIED.
            {"role": "user", "content": user_input},
        ],
        temperature=1
    )
        return response.choices[0].message.content 