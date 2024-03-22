import React from 'react';
import { useLocation } from 'react-router-dom';
import DisplayArea from '../components/displayArea';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';

const RepromptPage = () => {
  const location = useLocation();
  const userInput = new URLSearchParams(location.search).get('input');
  const isDark = CheckClass();
  return (
    <div>
      <p>User Input: {userInput}</p> {/*THIS IS FOR TESTING PURPOSES. REMOVE WHEN DONE BEFORE DEMO.*/}
      <Title route = {'/reprompt'}/>
      <SearchBar/>
      <div className="suggestion-prompt-container">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}> We're unable to find what you're looking for, here are some suggestions to improve your prompt. </div>
        <DisplayArea/> {/* REPLACE WITH SUGGESTIONS*/}
      </div>

    </div>
  );
}

export default RepromptPage;
