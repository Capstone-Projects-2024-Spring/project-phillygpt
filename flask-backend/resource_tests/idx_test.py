import pytest


def test_get_endpoints(client):
    """
    Test the get function of index.py for successful endpoint data retrieval.
    """
    response = client.get("/")
    data = response.get_json()

    assert response.status_code == 200
    assert 'message' in data
    assert 'endpoints' in data
