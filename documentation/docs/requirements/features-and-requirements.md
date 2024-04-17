---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
- User Input
    - Users have the ability to input questions related to the city of Philadelphia and receive an accurate response.
    - Must utilize NLP via OpenAI GPT-3.5 API

- SQL Query Generation
    - Create database schemas
    - SQL queries generated based on user input
    - The generated SQL query must be valid and relavant to the user's question
    - Suggest user queries on the home page

- Error Handling
    - When the user response is not clear, give a retry prompt to get the correct database query.
    - When there are no results for the user's question, it must be reprompted.

- User Interface
    - Develop a user-friendly interface using Flask and Python
    - Ensure that user interface remains consistent regardless of the screen size.
    - User must be notified when the data is loading during fetching operations.
    - Result area must display the answers to the user's question and other data used to fetch from the API.
    
- Mapping
    - When a user asks a question, if the answer pertains, a map should appear and display the geographical data about their question.

- Malicous SQL Queries
    - Malicous SQL queries such as: "DELETE, DROP, TRUNCATE, UPDATE, INSERT, ALTER, CREATE" are not allowed.
    - These malicous SQL queries need to be detected before execution to ensure data integrity in our databases.
    
- API Rate Limits
    - Must implement an API rate limit to prevent API abuse.
    

## Nonfunctional Requirements
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
