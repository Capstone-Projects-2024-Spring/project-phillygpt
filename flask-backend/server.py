#imports
from flask import Flask
from flask import jsonify
from flask_restful import Api
from resources.index import Index
from resources.process_input import ProcessInput
from flask_cors import CORS
from dotenv import load_dotenv
import logging
from flask import request
from mysql.connector import Error
from logging.handlers import RotatingFileHandler
#init
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
load_dotenv()

#API resource routes
api.add_resource(Index, '/')
api.add_resource(ProcessInput, '/process_input')


if not app.debug:
    # Set up file logging
    file_handler = RotatingFileHandler('flask.log', maxBytes=1024 * 1024 * 100, backupCount=20)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s '
        '[in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)
    app.logger.info('Flask application startup')

# Add a new route in your Flask application
@app.route('/execute_query', methods=['POST'])
def execute_query():
    try:
        # Extract SQL query from the request
        data = request.get_json()
        sql_query = data.get('sql_query')

        # Ensure the SQL query is not None or empty
        if sql_query:
            # Fetch data using the established SSH tunnel and database connection
            data = connect_fetch_data(sql_query)  # Change this line to use connect_fetch_data
            return jsonify(data), 200
        else:
            return jsonify({"error": "Empty SQL query."}), 400

    except Exception as e:
        logging.exception("Error during query execution")
        return jsonify({"error": str(e)}), 500

# Implement the function that connects to the database and executes the query
def run_sql_query(query):
    result = {}
    try:
        # Assuming you already have a database connection function
        connection = get_database_connection() # Implement this function
        cursor = connection.cursor(dictionary=True) # Use dictionary cursor to return data as a dictionary
        cursor.execute(query)
        result['data'] = cursor.fetchall()  # Fetch all the results
        cursor.close()
        connection.close()
        return result
    except Error as e:
        result['error'] = str(e)
        return result



if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/

