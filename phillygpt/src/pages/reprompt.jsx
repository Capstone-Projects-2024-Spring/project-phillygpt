// import React, { useState, useEffect }  from "react";
// import { useLocation } from 'react-router-dom';
// import Title from '../components/title';
// import SearchBar from '../components/searchbar';
// import CheckClass from '../components/DarkMode/checkClass';
// import SuggestionsContainer from '../components/SuggestionsContainer';


// const RepromptPage = () => {
//   const location = useLocation();
//   const userInput = new URLSearchParams(location.search).get('input');
//   const isDark = CheckClass();
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     fetch('/get_suggestions')
//       .then((response) => response.json())
//       .then((data) => setSuggestions(data))
//       .catch((error) => console.error('Error fetching suggestions:', error));
//   }, []);
  
//   return (
//     <div>
//       <Title route="/reprompt"/>
//       <SearchBar/>
//       <SuggestionsContainer suggestions={suggestions} />
//       <div className="suggestion-prompt-container">
//         <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}>
//           We're unable to find what you're looking for, here are some suggestions to improve your prompt.
//         </div>
//       </div>
//     </div>
//   );
// };
// export default RepromptPage;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';

const RepromptPage = () => {
  const location = useLocation();
  const [suggestions, setSuggestions] = useState([]);
  const isDark = CheckClass();

  useEffect(() => {
    // Fetch suggestions from the backend when the component mounts
    fetchSuggestions();
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch('/get_suggestions'); // Update the route based on backend
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const data = await response.json();
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);

    }
  };

  return (
    <div>
      <Title route="/reprompt" />
      <SearchBar />
      <div className="suggestion-prompt-container">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}>
          We're unable to find what you're looking for, here are some suggestions to improve your prompt.
        </div>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepromptPage;
