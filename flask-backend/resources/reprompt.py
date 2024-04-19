from flask import jsonify, request
from flask_restful import Resource
from resources.database_connection import get_database_uri
from resources.process_input import ProcessInput
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

schemas = get_database_uri()

class Reprompt(Resource):
    """
    Reprompt(Resource)
    This resource handles all reprompting when the user's input is unable to be located in our database.
    """
    def post(self):
        json_data = request.get_json()
        user_input = json_data.get('user_input', '')

        process_input = ProcessInput()
        table_name = process_input.determine_proper_table(user_input)

        if table_name is not None:
            reprompt_suggestions = self.generate_reprompt_suggestions(user_input, table_name)
        else:
            reprompt_suggestions = ["Could not determine the appropriate table for your query."]

        return {'reprompt_suggestions': reprompt_suggestions}
    
    def generate_reprompt_suggestions(self, user_input, table_name):
        suggestions = []

        if table_name in schemas:
            table_schema = schemas[table_name]

            #Extract keywords from the user input
            keywords = user_input.lower().split()

            #Iterate over the schema columns and check for keyword matches
            for column, data_type in table_schema.items():
                #Check if any keyword matches the column name
                for keyword in keywords:
                    if keyword.lower() in column.lower():
                        #Generate a suggestion based on the matched keyword and column
                        suggestion = f"Get data about {table_name.replace('_', ' ')} related to '{column}'"
                        suggestions.append(suggestion)
                        break #first match found

        #no relevant suggestions found based on keywords, generate suggestions based on schema
        if not suggestions:
            # Generate unique suggestions based on schema
            unique_suggestions = set()
            for column in table_schema:  # Iterate over column names only
                prompt = f"Get data about {table_name.replace('_', ' ')} related to '{column}'"
                unique_suggestions.add(prompt)

            #Add only 3 unique suggestions to the list
            suggestions.extend(list(unique_suggestions)[:3])

        #Refine the generated prompts
        refined_suggestions = self.refine_prompts(suggestions[:3])
        return refined_suggestions


    def openai_reprompt_req(self, suggestion):
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role" : "system" , "content" : "Everything in our database is related to the city of Philadelphia. I want you to take this suggestion template and refine it so that the prompt is specific and searchable in the database. So, for example if it says related to 'name' I want you to put a name appropriate in place and reformat the prompt. I want the prompt to make gramatical sense and makes sense when a person reads it outloud. For example, Give me a list of farmers markets in 19121 zip code, etc."},
                    {"role" : "user" , "content" : suggestion},
                    ],
                temperature = 1
            )

            return response.choices[0].message.content
        except Exception as e:
            return f"Error from OpenAI: {e}"
    
    def refine_prompts(self, prompts):
        refined_prompts = []
        for prompt in prompts:
            refined_prompt = self.openai_reprompt_req(prompt)
            refined_prompts.append(refined_prompt)
        return refined_prompts
        
    