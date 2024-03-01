import pytest
from server import app
'''
This is a test client for Flask RESTFul API Testing.
'''
@pytest.fixture
def client():
    return app.test_client()