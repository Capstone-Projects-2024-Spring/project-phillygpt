import pytest

def test_reprompt_post(client):
    """
    Test the post method of the Reprompt resource for successful generation of reprompt suggestions.
    """
    data = {"user_input": "This is a user input"}
    response = client.post("/reprompt", json=data)
    assert response.status_code == 200
    json_data = response.get_json()

    assert "reprompt_suggestions" in json_data
    assert len(json_data["reprompt_suggestions"]) > 0
