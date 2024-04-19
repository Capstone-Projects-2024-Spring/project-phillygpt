import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/title';
import SearchBar from '../components/searchbar';
import CheckClass from '../components/DarkMode/checkClass';
import SuggestionButton from '../components/suggestions';
import { responseCtx } from '../components/contex/responseCtx';
import { LoadingContext } from '../components/contex/loadingCtx';
import Loading from '../components/loading';

const RepromptPage = () => {
  const navigate = useNavigate();
  const isDark = CheckClass();
  const { repromptSuggestions } = useContext(responseCtx);
  const {isLoading, setLoading} = useContext(LoadingContext); 

  const handleButtonClick = (inputContent) => {
    setLoading(true);
    navigate(`/?input=${encodeURIComponent(inputContent)}`);
    setLoading(false);
  };
  console.log(repromptSuggestions);

  return (
    <div>
      <Title route='/reprompt' />
      <SearchBar />
      <div className="suggestion-prompt-container flex flex-col items-center">
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4 font-lightbold`}>
          We're unable to find what you're looking for, here are some suggestions to improve your prompt.
        </div>
        
        {isLoading ? (
          <Loading />
        ) : (repromptSuggestions.map((suggestion, index) => (
            <SuggestionButton
              key={index}
              text={suggestion}
              onClick={() => handleButtonClick(suggestion)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RepromptPage;