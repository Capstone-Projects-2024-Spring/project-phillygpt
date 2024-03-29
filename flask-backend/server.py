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

'''
# Utility function for establishing an SSH tunnel and connecting to the database
def connect_fetch_data(sql_query):
    """Connects to MySQL database through SSH tunnel and fetches data"""
    tunnel = None
    connection = None
    data = []

    try:
        # SSH tunnel parameters
        ssh_host = os.getenv('SSH_HOST')
        ssh_port = int(os.getenv('SSH_PORT', 22))  # Default to port 22 if not specified
        ssh_username = os.getenv('SSH_USERNAME')
        ssh_private_key = os.getenv('SSH_PRIVATE_KEY')

        mysql_host = os.getenv('MYSQL_HOST')
        mysql_port = int(os.getenv('MYSQL_PORT', 3306))  # Default to port 3306 if not specified
        mysql_username = os.getenv('MYSQL_USERNAME')
        mysql_password = os.getenv('MYSQL_PASSWORD')
        mysql_db = os.getenv('MYSQL_DB')

        # Establish SSH tunnel
        app.logger.info("Attempting to establish SSH tunnel...")
        tunnel = SSHTunnelForwarder(
            (ssh_host, ssh_port),
            ssh_username=ssh_username,
            ssh_pkey=ssh_private_key,
            remote_bind_address=(mysql_host, mysql_port)
        )
        tunnel.start()
        app.logger.info("SSH tunnel established.")
        

        # Connect to MySQL through the SSH tunnel
        app.logger.info("Attempting to connect to MySQL through SSH tunnel...")
        connection = mysql.connector.connect(
            host='127.0.0.1',
            port=tunnel.local_bind_port,
            user=mysql_username,
            password=mysql_password,
            database=mysql_db
        )
        
        if connection.is_connected():
            app.logger.info("Connected to MySql through SSH tunnel.")
            db_info = connection.get_server_info()
            app.logger.info(f"Connected to MySQL Server version: {db_info}")
            cursor = connection.cursor()
            app.logger.info(f"Executing query: {sql_query}")
            cursor.execute(sql_query)
            records = cursor.fetchall()
            app.logger.info(f"Query executed successfully, fetched {len(records)} records.")

            for row in records:
                data.append(row[:6])
                logging.info("Fetched data: %s", row)

    except Error as e:
        app.logger.error(f"Error connecting to MySQL Database: {e}")

    finally:
        if cursor is not None:
            cursor.close()
        if connection is not None and connection.is_connected():
            connection.close()
            logging.info("MySql Connection closed.")
        if tunnel is not None and tunnel.is_active:
            tunnel.stop()
            logging.info("SSH tunnel closed.")
    
    return data
'''
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

