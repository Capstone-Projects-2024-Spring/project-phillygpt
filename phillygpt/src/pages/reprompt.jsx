// src/pages/reprompt.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';

const RepromptPage = () => {
  const navigate = useNavigate();
  const isDark = CheckClass();

  const handleButtonClick = (inputContent) => {
    navigate(`/?input=${encodeURIComponent(inputContent)}`);
  };

  return (
    <div>
      <Title route='/reprompt' />
      <SearchBar />
      <div className="suggestion-prompt-container flex flex-col items-center">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}>
          We're unable to find what you're looking for, here are some suggestions to improve your prompt.
        </div>
        {/* Render three suggestion buttons */}
        <div className="suggestion-button w-full max-w-lg bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-600 cursor-pointer" onClick={() => handleButtonClick("Tell me about city landmarks")}>
          Tell me about city landmarks
        </div>
        <div className="suggestion-button w-full max-w-lg bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-600 cursor-pointer" onClick={() => handleButtonClick("List out arrests made in Philadelphia")}>
          List out arrests made in Philadelphia
        </div>
        <div className="suggestion-button w-full max-w-lg bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-600 cursor-pointer" onClick={() => handleButtonClick("EXAMPLE PROMPT")}>
          EXAMPLE PROMPT
        </div>
      </div>
    </div>
  );
}

export default RepromptPage;
