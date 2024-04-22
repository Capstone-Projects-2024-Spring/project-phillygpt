#imports
from flask import Flask
from flask_restful import Api
from resources.index import Index
from resources.process_input import ProcessInput
from resources.reprompt import Reprompt
from flask_cors import CORS

#init
app = Flask(__name__)
CORS(app, origins='*')
api = Api(app)
#API resource routes
api.add_resource(Index, '/')
api.add_resource(ProcessInput, '/process_input')
api.add_resource(Reprompt, '/reprompt')

if __name__ == "__main__":
    app.run()
    #DEFAULT: http://localhost:5000/

