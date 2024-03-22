import React from 'react';
import CheckClass from './DarkMode/checkClass';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const isDark = CheckClass();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
    if (userInput.trim() === 'ERROR') { //CHANGE WHEN BACKEND IS CONNECTED. SHOULD BE REPLACED WITH CHATGPT ERROR PROMPT.
      navigate('/reprompt');
    }
    else if(userInput.trim() ===""){
    }
    else {
      navigate(`/response?input=${encodeURIComponent(userInput)}`); //REPLACE WITH CHATGPT RESPONSE. 
    }
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
