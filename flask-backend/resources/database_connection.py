import os
from dotenv import load_dotenv
import mysql.connector
from mysql.connector import Error
from sshtunnel import SSHTunnelForwarder

load_dotenv()

def get_database_uri():
    """Constructs MySQL database URI and retrieves schema information"""
    ssh_host = os.getenv('SSH_HOST')
    ssh_port = int(os.getenv('SSH_PORT', 22))  # Default to port 22 if not specified
    ssh_username = os.getenv('SSH_USERNAME')
    ssh_private_key = os.getenv('SSH_PRIVATE_KEY')

    mysql_host = os.getenv('MYSQL_HOST')
    mysql_port = int(os.getenv('MYSQL_PORT', 3306))  # Default to port 3306 if not specified
    mysql_username = os.getenv('MYSQL_USERNAME')
    mysql_password = os.getenv('MYSQL_PASSWORD')
    mysql_db = os.getenv('MYSQL_DB')

    try:
        # Establish SSH tunnel
        with SSHTunnelForwarder(
            (ssh_host, ssh_port),
            ssh_username=ssh_username,
            ssh_pkey=ssh_private_key,
            remote_bind_address=(mysql_host, mysql_port)
        ) as tunnel:
            # Connect to MySQL through the SSH tunnel
            connection = mysql.connector.connect(
                host='127.0.0.1',
                port=tunnel.local_bind_port,
                user=mysql_username,
                password=mysql_password,
                database=mysql_db
            )
            if connection.is_connected():
                db_info = connection.get_server_info()
                uri = f'mysql://{mysql_username}:{mysql_password}@{mysql_host}:{mysql_port}/{mysql_db}'
                cursor = connection.cursor()
                
                # Retrieve schema representation
                schema_representation = get_schema_representation(cursor)
                
                cursor.close()
                connection.close()
                
                return schema_representation

    except Error as e:
        print("Error connecting to MySQL database:", e)
        return None, None

def get_schema_representation(cursor):
    """ Get the database schema in a JSON-like format """
    db_schema = {}
    
    # Query to get all table names
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = DATABASE();")
    tables = cursor.fetchall()
    
    for table in tables:
        table_name = table[0]
        
        # Query to get column details for each table
        cursor.execute(f"SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '{table_name}';")
        columns = cursor.fetchall()
        
        column_details = {}
        for column in columns:
            column_name = column[0]
            column_type = column[1]
            column_details[column_name] = column_type
        
        db_schema[table_name] = column_details
    
    return db_schema

if __name__ == "__main__":
    database_uri, schema_representation = get_database_uri()
    if database_uri:
        print("Database URI:", database_uri)
        print("Schema Representation:", schema_representation)
    else:
        print("Failed to get the database URI.")
