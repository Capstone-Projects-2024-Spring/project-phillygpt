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
    - HTTP response status of 200 for successful request
    - message and endpoints are present in the data

##### Test: POST HTTP request to RESTFul API for processing valid user input.
`
test_post_user_input(client)
`
- Assertions:
    - HTTP response status of 200 for successful request
    - JSON data includes 'message' and 'status'

##### Test: POST HTTP request to RESTFul API for reprompt suggestions.
`
test_reprompt_post(client)
`
- Assertions:
    - HTTP response status of 200 for successful request
    - JSON data includes 'reprompt_suggestions', which contains more than one suggestion
