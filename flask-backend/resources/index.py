from flask import jsonify
from flask_restful import Resource


class Index(Resource):
    """
    Index(Resource)
    This resource provides information about the available endpoints accessible to the user
    """
    def get(self):
        """
        This resource handles GET HTTP requests to the '/' endpoint
        Return:
            JSON on available endpoints.
        """
        return jsonify({"message" : "Welcome to the API.", 
                "endpoints" : {
                    "index [method=GET]" : "/",
                    "process_input [method=POST]" : "/process_input",
                    "reprompt [method=POST]" : "/reprompt"
                }})
        