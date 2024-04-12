import mysql.connector
from mysql.connector import Error
from sshtunnel import SSHTunnelForwarder
import os

def execute_sql_query(sql_query):
    try:
        # Establish SSH tunnel if required
        with SSHTunnelForwarder(
            (os.getenv('SSH_HOST'), int(os.getenv('SSH_PORT', 22))),
            ssh_username=os.getenv('SSH_USERNAME'),
            ssh_pkey=os.getenv('SSH_PRIVATE_KEY'),
            remote_bind_address=(os.getenv('MYSQL_HOST'), int(os.getenv('MYSQL_PORT', 3306)))
        ) as tunnel:
            # Establish database connection through the SSH tunnel
            connection = mysql.connector.connect(
                host='127.0.0.1',
                port=tunnel.local_bind_port,
                user=os.getenv('MYSQL_USERNAME'),
                password=os.getenv('MYSQL_PASSWORD'),
                database=os.getenv('MYSQL_DB')
            )

            if connection.is_connected():
                cursor = connection.cursor()
                cursor.execute(sql_query)
                result = cursor.fetchall()
                connection.commit()
                return result

    except Error as e:
        print(f"Error executing SQL query: {e}")
        return None

    finally:
        if connection and connection.is_connected():
            cursor.close()
            connection.close()
