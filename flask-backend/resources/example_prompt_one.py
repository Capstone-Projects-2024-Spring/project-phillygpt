from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error
from sshtunnel import SSHTunnelForwarder
import logging
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
print(os.environ.get("SSH_PRIVATE_KEY"))

def connect_fetch_data():
    """Connects to MySQL database through SSH tunnel and fetches data"""
    tunnel = None
    connection = None
    data = []

    try:
        # # SSH tunnel parameters
        # ssh_host = 'ec2-3-13-209-241.us-east-2.compute.amazonaws.com'
        # ssh_port = 22
        # ssh_username = 'ec2-user'
        # ssh_private_key = r'C:\Users\andrewto\.ssh\phillygpt.pem'

        # # MySQL database parameters
        # mysql_host = 'phillygptdb1.czgma8k2kt6g.us-east-2.rds.amazonaws.com'
        # mysql_port = 3306
        # mysql_username = 'admin'
        # mysql_password = 'vuwva8-vZgabt-zip5m'
        # mysql_db = 'phillygpt'

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
        tunnel = SSHTunnelForwarder(
            (ssh_host, ssh_port),
            ssh_username=ssh_username,
            ssh_pkey=ssh_private_key,
            remote_bind_address=(mysql_host, mysql_port)
        )
        tunnel.start()
        logging.info("SSH tunnel established.")

        # Connect to MySQL through the SSH tunnel
        connection = mysql.connector.connect(
            host='127.0.0.1',
            port=tunnel.local_bind_port,
            user=mysql_username,
            password=mysql_password,
            database=mysql_db
        )
        logging.info("Connected to MySql through SSH tunnel.")

        if connection.is_connected():
            db_info = connection.get_server_info()
            logging.info("Connected to MySql Server version: %s", db_info)
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM farmers_markets_location LIMIT 100;")
            records = cursor.fetchall()

            for row in records:
                data.append(row[:6])
                logging.info("Fetched data: %s", row)

    except Error as e:
        logging.warning("Error connecting to MySql Database: %s", e)

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

@app.route('/data', methods=['GET'])
def get_data():
    data = connect_fetch_data()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
