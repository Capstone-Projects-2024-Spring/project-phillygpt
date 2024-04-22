from flask import request, jsonify
from flask_restful import Resource
from openai import OpenAI
import os
import json
from dotenv import load_dotenv
from resources.database_connection import get_database_uri
from resources.prompts import SYSTEM_MESSAGE, SYSTEM_MESSAGE_TWO
from resources.validate_sql_query import validate_sql_query
from resources.execute_sql_query import execute_sql_query


# Load .env file
load_dotenv()


client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

class ProcessInputMap(Resource):
    """
    ProcessInputMap(Resource)
    This resource handles user input and generates a SQL query using OpenAI
    """

    def post(self):
        """
        Handles POST HTTP requests to the '/process_input/ endpoint.
        Returns:
            JSON of user input and OpenAI response.
        """
        print("SHWUPD")
        # Get user input
        data = request.get_json()
        user_input = data.get("user_input")
        marker_text = data.get("marker_text")

        response = self.openai_request(user_input, marker_text)
        return jsonify({"status": "success", "USER_INPUT": user_input, "MARKER_TEXT": marker_text, "OPENAI_RESPONSE": response})
            
    def openai_request(self, user_input, marker_text):
        """
        Sends a request to OpenAI to generate a SQL Query based on the user input.
        Args:
            user_input (string): User's prompt for generating SQL query.
        Returns: Generated SQL query as a String.
        """
        try:

                formatted_system_message = SYSTEM_MESSAGE_TWO.format(user_query=user_input)

                response = client.chat.completions.create(
                        model="gpt-3.5-turbo",
                        messages=[
                        {"role": "system", "content": formatted_system_message},
                        {"role": "user", "content": marker_text},
                        ],
                        temperature=1
                )
                generated_query = response.choices[0].message.content

                return generated_query
        except Exception as e:
            return f"An error occured"

    