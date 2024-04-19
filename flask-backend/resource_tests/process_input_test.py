import pytest

def test_post_user_input(client):
    """
    Test the post method of the ProcessInput resource for successful processing of user input.
    """
    data = {"user_input": "This is a user input"}
    response = client.post("/process_input", json=data)
    assert response.status_code == 200
    json_data = response.get_json()

    assert "message" in json_data
    assert "status" in json_data
