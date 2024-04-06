from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
from dotenv import load_dotenv
from resources.database_connection import get_database_uri
from resources.prompts import SYSTEM_MESSAGE

#load .env file
load_dotenv()

schemas = get_database_uri()

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
        data = request.get_json()
        user_input = data.get("user_input")
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
        if not user_input:
            print(user_input)
            return "User input is empty."
        try:
            formatted_system_message = SYSTEM_MESSAGE.format(schema=schemas['City_Landmarks'])

            response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": formatted_system_message},
                {"role": "user", "content": user_input},
            ],
            temperature=1
            )
            return response.choices[0].message.content
        except Exception as e:
            return f"Error from OpenAI: {e}"