#imports
from flask import Flask
from flask_restful import Api
from resources.index import Index
from resources.process_input import ProcessInput
from flask_cors import CORS

#init
app = Flask(__name__)
CORS(app, origins='*')
api = Api(app)
#API resource routes
api.add_resource(Index, '/')
api.add_resource(ProcessInput, '/process_input')

if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/

