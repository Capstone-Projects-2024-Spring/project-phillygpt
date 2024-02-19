#imports
from flask import Flask, request, render_template
from openai import OpenAI
import os
from dotenv import load_dotenv
import requests

#load .env file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
        

MODEL = "gpt-3.5-turbo"
@app.route("/process_input", methods=["POST"])
def process_input():
    #get user input
    user_prompt = request.form.get("user_input")

    # Querying the API
    response = requests.get("https://phl.carto.com/api/v2/sql?q=SELECT * FROM arrests_citywide")
    if response.status_code == 200:
        # Extracting the response content
        data = response.json()

        # You can process the data here or pass it to the template
        print(data)
        response_text = "Data retrieved from the API: {}".format(data)
    else:
        response_text = "Failed to retrieve data from the API."

    #returns prompt and reponse
    return render_template("index.html", user_input=user_prompt, generated_text=response_text)

if __name__ == "__main__":
    app.run(debug=True)
    #DEFAULT: http://localhost:5000/
