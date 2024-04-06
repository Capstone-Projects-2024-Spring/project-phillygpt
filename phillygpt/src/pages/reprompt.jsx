import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';

const RepromptPage = () => {
  const location = useLocation();
  const userInput = new URLSearchParams(location.search).get('input');
  const isDark = CheckClass();

  const suggestions = [
    "Check your spelling and try again.",
    "Try using different keywords.",
    "Refine your search query for better results.",
    "Use more specific keywords.",
  ];
  return (
    <div>
      <Title route = {'/reprompt'}/>
      <SearchBar/>
      <div className="suggestion-prompt-container">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}> We're unable to find what you're looking for, here are some suggestions to improve your prompt. </div>
        {/* REPLACE WITH SUGGESTIONS*/}
        <ul className="list-disc ml-8">
          {suggestions.map((suggestion, index) => (
            <li key={index} className={`text-${isDark ? 'white' : 'black'} mb-2`}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RepromptPage;
