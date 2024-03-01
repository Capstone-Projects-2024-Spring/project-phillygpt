---
sidebar_position: 1
---
# Unit Tests
Tests are automated by GitHub Actions on every pull request to the main branch.
## RESTFul API Endpoint Tests

#### Flask Testing Client
`
client()
`
Creates a client to run Flask tests

##### Test: GET HTTP request to RESTFul API for available endpoints
`
test_get_endpoints(client)
`
- Assertions:
    - HTTP response status of 200 for sucessful request
    - message and endpoints are present in the data

##### Test: POST HTTP request to RESTFul API for processing user input.
`
test_post_user_input()
`
- Assertions:
    - HTTP response status of 200 for sucessful request
    - Successful response of JSON data that includes user input and the response from OpenAI.