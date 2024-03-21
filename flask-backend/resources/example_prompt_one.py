# import mysql.connector
# from mysql.connector import Error
# import logging

# logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# def connect_fetch_data():
#     """Connects to MySQL database and fetches data"""
#     connection = None

#     try:
#         # Connection parameters
#         connection = mysql.connector.connect(
#             host='phillygptdb1.czgma8k2kt6g.us-east-2.rds.amazonaws.com',
#             database='phillygpt',
#             user='admin',
#             password='vuwva8-vZgabt-zip5m'
            
#         )
#         logging.info("Setting MySql database connection parameters...")

#         if connection.is_connected():
#             db_info = connection.get_server_info()
#             logging.info("Connected to MySql Server version: %s", db_info)
#             cursor = connection.cursor()
#             cursor.execute("SELECT * FROM Bike_Network LIMIT 10;")
#             records = cursor.fetchall()
            
#             for row in records:
#                 logging.info("Fetched data: %s", row)
#                 #print(row)

#     except Error as e:
#         logging.warning("Error connecting to MySql Database: %s", e)

#     finally:
#         if connection is not None and connection.is_connected():
#             cursor.close()
#             connection.close()
#             logging.info("MySql Connection closed.")

# if __name__ == '__main__':
#     connect_fetch_data()

import mysql.connector
from mysql.connector import Error
from sshtunnel import SSHTunnelForwarder
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def connect_fetch_data():
    """Connects to MySQL database through SSH tunnel and fetches data"""
    tunnel = None
    connection = None

    try:
        # SSH tunnel parameters
        ssh_host = 'ec2-3-13-209-241.us-east-2.compute.amazonaws.com'
        ssh_port = 22
        ssh_username = 'ec2-user'
        ssh_private_key = r'C:\Users\quynh\.ssh\phillygpt.pem'

        # MySQL database parameters
        mysql_host = 'phillygptdb1.czgma8k2kt6g.us-east-2.rds.amazonaws.com'
        mysql_port = 3306
        mysql_username = 'admin'
        mysql_password = 'vuwva8-vZgabt-zip5m'
        mysql_db = 'phillygpt'

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
            cursor.execute("SELECT * FROM Bike_Network LIMIT 100;")
            records = cursor.fetchall()

            for row in records:
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

if __name__ == '__main__':
    connect_fetch_data()
