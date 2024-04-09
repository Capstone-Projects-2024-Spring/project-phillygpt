from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from sshtunnel import SSHTunnelForwarder
import logging
import os
from dotenv import load_dotenv
from contextlib import contextmanager

load_dotenv()
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Global variables for the SSH tunnel and MySQL connection
tunnel = None
connection = None

def create_ssh_tunnel():
    """
    Used to establish ssh tunnel connection before connecting to database
    """
    global tunnel
    ssh_host = os.getenv('SSH_HOST')
    ssh_port = int(os.getenv('SSH_PORT', 22))
    ssh_username = os.getenv('SSH_USERNAME')
    ssh_private_key = os.getenv('SSH_PRIVATE_KEY')
    mysql_host = os.getenv('MYSQL_HOST')
    mysql_port = int(os.getenv('MYSQL_PORT', 3306))

    tunnel = SSHTunnelForwarder(
        (ssh_host, ssh_port),
        ssh_username=ssh_username,
        ssh_pkey=ssh_private_key,
        remote_bind_address=(mysql_host, mysql_port)
    )
    tunnel.start()

def create_db_connection():
    """
    Used to connect to database after establishing ssh tunnel connection
    """
    global connection
    mysql_username = os.getenv('MYSQL_USERNAME')
    mysql_password = os.getenv('MYSQL_PASSWORD')
    mysql_db = os.getenv('MYSQL_DB')
    
    connection = mysql.connector.connect(
        host='127.0.0.1',
        port=tunnel.local_bind_port,  # Use the local bind port from the SSH tunnel
        user=mysql_username,
        password=mysql_password,
        database=mysql_db
    )

def initialize_connection():
    """
    Initialize all connections
    """
    try:
        create_ssh_tunnel()
        create_db_connection()
        logging.info("SSH tunnel and database connection established.")
    except Error as e:
        logging.error("Failed to establish SSH tunnel or database connection: %s", e)

def close_connection(exception):
    global tunnel, connection
    if connection and connection.is_connected():
        connection.close()
        logging.info("Database connection closed.")
    if tunnel and tunnel.is_active:
        tunnel.stop()
        logging.info("SSH tunnel closed.")

@app.route('/example1', methods=['GET'])
def get_example1():
    initialize_connection()
    data = []

    try:
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM farmers_markets_location LIMIT 100;")
            records = cursor.fetchall()
            for row in records:
                data.append(row[:6])

    except Error as e:
        logging.warning("Error fetching data: %s", e)

    finally:
        if cursor:
            cursor.close()

    return jsonify(data)

@app.route('/example2', methods=['GET'])
def get_example2():
    """
    Results are in form of:

    Partially vaccinated
    Fully vaccinated
    Boosted
    """

    initialize_connection()
    data = []
    
    try:
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM covid_vaccine_totals;")
            records = cursor.fetchall()
            for row in records:
                data.append(row)

    except Error as e:
        logging.warning("Error fetching data: %s", e)

    finally:
        if cursor:
            cursor.close()

    results = [['Partially vaccinated'],['Fully vaccinated'],['Boosted']]

    for i in range(len(data[0])):
        results[i].append(data[0][i])

    return jsonify(results)

@app.route('/example3', methods=['GET'])
def get_example3():
    initialize_connection()
    data = []
    
    try:
        if connection.is_connected():
            cursor = connection.cursor()
            query = "SELECT * FROM Bike_Network LIMIT 10;"
            cursor.execute(query)
            data = cursor.fetchall()
            records = cursor.fetchall()
            for row in records:
                data.append(row)

    except Error as e:
        logging.warning("Error fetching data: %s", e)

    finally:
        if cursor:
            cursor.close()

    return jsonify(data)

@app.route('/example4', methods=['GET'])
def get_example4():
    initialize_connection()
    data = []
    
    try:
        if connection.is_connected():
            cursor = connection.cursor()
            query = "SELECT * FROM universities_colleges;"
            cursor.execute(query)
            data = cursor.fetchall()
            records = cursor.fetchall()
            for row in records:
                data.append(row)

    except Error as e:
        logging.warning("Error fetching data: %s", e)

    finally:
        if cursor:
            cursor.close()

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
