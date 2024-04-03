#!/bin/bash

# Check if the .pem file exists
if [ -f /app/ssh/phillygpt.pem ]; then
  echo ".pem file exists. Starting Flask server..."
  # Start the Flask server
  echo "Success: .pem file found."
  flask run
else
  echo "Error: .pem file not found."
  exit 1
fi
