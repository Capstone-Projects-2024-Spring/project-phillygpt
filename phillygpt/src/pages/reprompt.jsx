import React from 'react';
import { useLocation } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';

const RepromptPage = () => {
  const location = useLocation();
  const userInput = new URLSearchParams(location.search).get('input');
  const isDark = CheckClass();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    // Fetch reprompt suggestions from the backend
    fetch('/reprompt_suggestions')
      .then(response => response.json())
      .then(data => setSuggestions(data))
      .catch(error => console.error('Error fetching reprompt suggestions:', error));
  }, []);

  return (
    <div>
      <Title route = {'/reprompt'}/>
      <SearchBar/>
      <div className="suggestion-prompt-container">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}> We're unable to find what you're looking for, here are some suggestions to improve your prompt. </div>
        {/* REPLACE WITH SUGGESTIONS*/}
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RepromptPage;
