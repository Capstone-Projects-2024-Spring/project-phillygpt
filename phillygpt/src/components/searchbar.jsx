import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { LoadingContext } from './contex/loadingCtx';
import { responseCtx } from './contex/responseCtx';

const SearchBar = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const { setLoading } = useContext(LoadingContext);
  const { setResponseDataSQL, setResultDataSQL, setRepromptSuggestions } = useContext(responseCtx);
  const {userInputQuery, setUserInputQuery} = useContext(responseCtx);
  const location = useLocation();

  // Extract userInput from URL parameter when component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inputFromUrl = searchParams.get('input');
    if (inputFromUrl) setUserInput(inputFromUrl);
  }, [location.search]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const setStatus = (message) => {
    console.log('Status:', message);
  };

  const handleButtonClick = () => {
    console.log(userInput);
    if (userInput.trim() === 'ERROR') {
      navigate('/reprompt');
    } else if (userInput.trim() === "") {
      // Do nothing with empty input
    } else {
      setLoading(true);
      axios.post('http://127.0.0.1:5000/process_input', { user_input: userInput })
        .then(response => {
          console.log(response.data);
          if (response.data.status === "success") {
            setResponseDataSQL(response.data.OPENAI_RESPONSE);
            setResultDataSQL(response.data.RESULT);
            setUserInputQuery(response.data.USER_INPUT);
            navigate(`/response?input=${encodeURIComponent(userInput)}`);
          } else {
            setStatus('An error occurred during processing.');
            axios.post('http://127.0.0.1:5000/reprompt', { user_input: userInput })
              .then(response => {
                console.log(response.data);
                setRepromptSuggestions(response.data.reprompt_suggestions);
                navigate('/reprompt');
              })
              .catch(error => {
                console.error('Error fetching reprompt suggestions:', error);
                setStatus('An error occurred during processing.');
                navigate('/reprompt');
              });
          }
        })
        .catch(error => {
          console.error('Error: ', error);
          setStatus('An error occurred during processing.');
          navigate('/reprompt');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  

  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="p-2 w-2/5 h-12 rounded-l-md text-black bg-white-300"
        placeholder="Ask me something..."
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white p-2 rounded-r-md w-28 h-12 font-lightbold text-mg"
        style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;