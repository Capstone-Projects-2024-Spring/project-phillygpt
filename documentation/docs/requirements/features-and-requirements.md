---
sidebar_position: 4
---

# Features and Requirements

Functional Requirements
-----------------------

- User Input
  - Users will be able to input questions related to the city of Philadelphia and receive an accurate response.

- Natural Language Processing
  - Must utilize OpenAI GPT-3.5 or GPT-4 API for natural language processing

- SQL Query Generation
  - Create Database Schemas
  - SQL queries generated based on the user input.
  - The generated SQL query should be valid and relevant to the question the user asked.
  - Suggested user queries to show on the home page.

- Error Handling
  - When the user's question is not clear, give a "did you mean..." correction response.
  - When there are no results for the user question, it must be re-prompted.

- User Interface
  - Develop a user-friendly interface using Flask and Python.
  - Ensure that the user interface remains consistent regardless of screen size.
  - Users should be aware that the data is loading during fetching operations.
  - Results area should display the answers to the user's question and other data used to fetch from the API.
    - SQL query, Tables queried

- Mapping
  - When a user asks a question a map should display the geographical data about their question

- API Rate limits
  - Implement API rate limits to prevent API abuse

Nonfunctional Requirements
--------------------------

- Ease of Navigation
  - The core functionality of the program must be easily accessible without extensive navigation.

- Logging System
  - The Logging system helps to debug any issues encountered for backend processes.

- Hosting
  - Utilize AWS EC2 instance for hosting the frontend of the project.
  - Establish seamless communication between the front and serverless back end of the project

- API Integration
  - Ensure smooth integration between OpenAI API, Carto SQL API, and application backend

- Performance
  - Quick response times for query generation and data retrieval
