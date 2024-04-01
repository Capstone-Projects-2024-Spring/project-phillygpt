import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { LoadingContext } from './loadingCtx';

const SearchBar = () => {

  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const {setLoading} = useContext(LoadingContext);
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
    if (userInput.trim() === 'ERROR') { //ENGINEER THE PROMPT TO RESPOND ONLY WITH 'ERROR' WHEN DATA IS NOT FOUND IN THE ANY TABLES.
      navigate('/reprompt');
    }
    else if(userInput.trim() ===""){
      //Do nothing with empty input
    }
    else {
      //TEST LOADING COMPONENT
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);

      setLoading(true);
      axios.post('http://127.0.0.1:5000/process_input', {user_input : userInput})
        .then(response => {
          console.log(response.data);
          navigate(`/response?input=${encodeURIComponent(userInput)}`);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error: ', error);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  };
  
  return (
    <div className="flex justify-center items-center mb-4">
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className={`p-2 w-2/5 h-12 rounded-l-md 'text-black bg-gray-300'}`}
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
