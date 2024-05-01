---
sidebar_position: 2
---

# System Block Diagram

<img width="646" alt="PhillyGPT Block Diagram" src="https://github.com/Capstone-Projects-2024-Spring/project-phillygpt/assets/76089708/791c693d-f465-496a-a282-9f21391c6770" />


##### Figure 1. High level design of PhillyGPT application.

Figure 1 illustrates the architecture of PhillyGPT. This project has a React frontend, where users can input prompts. These prompts are sent to a Flask backend server, which is responsible for handling the incoming data and interacting with both the OpenAI API and a MySQL database using AWS RDS (Relational Database Service)..

When a user submits a prompt through the React frontend, the Flask server receives this input and with the OpenAI API formulates a SQL query based on the user's input. The SQL query is then sent to the MySQL database hosted on AWS RDS.

The database processes the SQL query and returns the results to the Flask server. The Flask server then sends this data back to the React frontend, which displays the results to the user.

The entire project is hosted on an AWS EC2 (Elastic Compute Cloud) instance, which provides the necessary compute resources to run both the React frontend and the Flask backend server, as well as to communicate with the OpenAI API and RDS MySQL database. 
