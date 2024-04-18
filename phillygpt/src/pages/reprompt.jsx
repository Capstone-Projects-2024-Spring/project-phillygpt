// src/pages/reprompt.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';
import SuggestionButton from '../components/suggestions';

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
        <SuggestionButton text="Tell me about city landmarks" onClick={() => handleButtonClick("Tell me about city landmarks")} />
        <SuggestionButton text="List out arrests made in Philadelphia" onClick={() => handleButtonClick("List out arrests made in Philadelphia")} />
        <SuggestionButton text="EXAMPLE PROMPT" onClick={() => handleButtonClick("EXAMPLE PROMPT")} />
      </div>
    </div>
  );
}

export default RepromptPage;
