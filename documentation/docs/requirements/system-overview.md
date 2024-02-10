---
sidebar_position: 1
---

# System Overview

## Project Abstract
PhillyGPT is a website giving users the ability to input prompts that query for requested data. This project aims to create a web application where users can input questions about Philadelphia and with OpenAI's API’s, translate the question into an SQL query.

These queries will retrieve data from a number of distinct databases available through OpenDataPhilly, each accessible via Carto's SQL API. Databases include and are not limited to information on public safety, education, and real estate.

The question to the user’s answer will then be displayed in an easy to read format, whether a simple sentence or table with a detailed map. The application's core functionality includes an interface for question input, a backend for query generation, execution, and displaying database responses for the user to understand.

## Conceptual Design
This project will have a web-based application architecture with respective frontend and a serverless backend. The frontend will be developed with Python Flask to create a responsive interface. On the serverless backend (AWS Lambda) we will need to use Python to connect to one of OpenAI’s API’s to generate SQL queries based on user prompts. We can use an AWS EC2 instance to host the frontend.

The serverless backend will construct an HTTP request with the SQL query and send it to Carto’s SQL API. Carto's will then retrieve the requested information from the database that contains the requested information and return it in JSON format. The EC2 instance will then use the data to display the results in the front-end. Error handling will also need to be considered for any queries that do not produce valid results. By integrating NLP with database management, this project seeks to provide data-driven answers to a wide array of queries about the city, ranging from demographic statistics to public service information.

## Background
There is a project called San Francisco GPT. They also have another demo called Census GPT. Both of these projects utilize the respective datasets for their specific domains. PhillyGPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. Philly GPT will not be a fork of the project, but will be simpler and light weight. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project may be abandoned. They only output pre-recorded responses.

OpenDataPhilly is also a phenomenal resource that has very insightful metrics across many categories. Although the information is stored in large CSV and JSON files. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming. With PhillyGPT the user can query various databases with ease. Allowing them to find answers to their questions without having to page through hundreds of entities in a database.
