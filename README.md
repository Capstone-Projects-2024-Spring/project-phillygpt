<div align="center">

# PhillyGPT
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords

Section 02, Natural Language Processing, Databases, SQL, Node.js, Web Application, Python, Javascript, React, Philadelphia Public Data, OpenAI, SQL Query Generation

## Project Abstract

PhillyGPT is a web application that provides data from SQL databases to users in an easy to read format without having to write a single line of code. This application will provide easy access to information that may otherwise only be accessible with technological expertise. Our hosted databases contain information about public safety, food availability, education, and health.

A user types a question into an input box and submits their question. OpenAI’s GPT 3.5 large language model (LLM) translates the question into a valid SQL query based on the databases we have cloned from the OpenDataPhilly program. Then the query is executed in our databases. After being processed, the answer to the user’s question is displayed in an easy to read format. The data may be displayed as a formatted table, a few sentences, or alongside a map.

## High Level Requirement

The product will allow users to input questions in natural language about various aspects of Philadelphia. The application will then translate these queries into SQL, fetch data from the relevant OpenDataPhilly databases, and present the results in a readable and engaging format. It will handle a broad range of query types, ensuring accuracy and relevance in the data presented.

## Conceptual Design

This project will have a web-based application architecture with respective frontend and a backend. The frontend will be developed with the React framework utilizing Javascript and Typescript where necessary to create a responsive interface. The backend will be implemented with Flask and written in Python.

Both the frontend and the backend will be hosted on an AWS Elastic Compute Cloud (EC2) instance running Linux. Alongside the EC2 instance, there will be a MySQL server running through AWS' Relational Database Service (RDS).

Users will visit the website and enter a question into the search bar. Once they press enter the query is sent to the Flask backend where it will be properly processed. Then the request will be sent to OpenAI using its API for the GPT 3.5 large language model, and a SQL statement will be generated. This will be returned as a JSON response and checked by the backend to ensure it is a valid SQL query for the respective database.

If the query is not valid, then the user will be asked to enter a new question. On the other hand if the query is valid, then the query is executed on the MySQL server. Then the query results are sent to the frontend where they are tabularized or formatted and properly displayed.

## Background

There is a project called San Francisco GPT. They also have another project called Census GPT. Both of these projects utilize the respective datasets for their specific domains. As it is, San Francisco GPT and Census GPT do not run any user generated requests as the project is abandoned. The only inputs that are functioning is a limited number of pre-recorded responses.

Aside from this, there are no similar projects for other cities around the world. Philly GPT will be a specialized adaptation of these projects using public datasets that pertain to Philadelphia. PhillyGPT will not be a fork of the project. PhillyGPT will be simpler user interface with easy to read data formatting for users.

OpenDataPhilly is a phenomenal resource that has an abundance of data pertaining to the City of Philadelphia. All of this data could be useful to the city's residents, but the information is stored in large CSV and JSON files. This is not very accessible. If a user wanted to find specific information from OpenDataPhilly the process would be painstaking and time consuming.

With PhillyGPT, the user can query various databases with ease, and with fewer steps. Allowing them to find answers to their questions without having to page through thousands of entities in hundreds of databases.

## Required Resources
- Internet Access
- Python
- Flask
- Linux
- JavaScript
- Node.js
- SQL
- AWS EC2
- AWS RDS
- MySQL
- React
- TypeScript
- OpenAI’s GPT-3.5 API
- CSS Tailwind
- Google Maps API

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/andrewto30">
            <img src="https://avatars.githubusercontent.com/u/28883218?v=4" width="100;" alt="andrewto30"/>
            <br />
            <sub><b>Andrew To</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/princegeutler">
            <img src="https://avatars.githubusercontent.com/u/46353482?v=4" width="100;" alt="princegeutler"/>
            <br />
            <sub><b>Prince Geutler</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/alishahidd">
            <img src="https://avatars.githubusercontent.com/u/76089708?v=4" width="100;" alt="alishahidd"/>
            <br />
            <sub><b>Ali Shahid</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/zyij99">
            <img src="https://avatars.githubusercontent.com/u/91389500?v=4" width="100;" alt="zyij99"/>
            <br />
            <sub><b>Brandon Zheng</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tul58767">
            <img src="https://avatars.githubusercontent.com/u/111989897?v=4" width="100;" alt="tul58767"/>
            <br />
            <sub><b>Quynh Cao</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AidanScharnikow">
            <img src="https://avatars.githubusercontent.com/u/111991905?v=4" width="100;" alt="AidanScharnikow"/>
            <br />
            <sub><b>Aidan Scharnikow</b></sub>
        </a>
    </td>
   </tr>
</table>

[//]: # ( readme: collaborators -end )

