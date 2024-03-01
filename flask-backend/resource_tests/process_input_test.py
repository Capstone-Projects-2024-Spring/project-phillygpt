import pytest

def test_post(client):
    """
    Test the post method of the ProcessInput resource for successful processing of user input.
    """
    data = {"user_input": "This is a user input"}
    response = client.post("/process_input", data=data)
    assert response.status_code == 200
    json_data = response.get_json()

    assert "USER_INPUT" in json_data
    assert "OPENAI_RESPONSE" in json_data