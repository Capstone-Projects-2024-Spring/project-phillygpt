---
sidebar_position: 1
---

# System Overview

## Project Abstract
PhillyGPT is a web application that provides data from SQL databases to users in an easy to read format without having to write a single line of code. This application will provide easy access to information that may otherwise only be accessible with technological expertise. Our hosted databases contain information about public safety, food availability, education, and health. 

 A user enters a question into an input box and clicks ‘Submit’. OpenAI’s GPT 3.5 large language model (LLM) translates the question into a valid SQL query based on the databases we have cloned from the OpenDataPhilly program. After being processed, the answer to the user’s question is displayed in an easy to read format. The data may be displayed as a formatted table, a few sentences, or alongside a map. 

## Conceptual Design
This project will have a web-based application architecture with respective frontend and a serverless backend. The frontend will be developed with Python Flask to create a responsive interface. 

On the serverless backend (AWS Lambda) we will need to use Python to connect to one of OpenAI’s API’s to generate SQL queries based on user prompts. We can use an AWS EC2 instance to host the frontend. The serverless backend will construct an HTTP request with the SQL query and send it to Carto’s SQL API. 

Carto's will then retrieve the requested information from the database that contains the requested information and return it in JSON format. The EC2 instance will then use the data to display the results in the front-end. Error handling will also need to be considered for any queries that do not produce valid results. 

By integrating NLP with database management, this project seeks to provide data-driven answers to a wide array of queries about the city, ranging from demographic statistics to public service information


## Background
There is a project called San Francisco GPT. They also have another demo called Census GPT. Both of these projects utilize the respective datasets for their specific domains. 

Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. Philly GPT will not be a fork of the project, but will be simpler and light weight. 

As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project may be abandoned. They only output pre-recorded responses.

OpenDataPhilly is also a phenomenal resource that has very insightful metrics across many categories. Although the information is stored in large CSV and JSON files. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming. With PhillyGPT the user can query the various databases with ease. Allowing them to find answers to their questions without having to page through hundreds of entities in a database.
