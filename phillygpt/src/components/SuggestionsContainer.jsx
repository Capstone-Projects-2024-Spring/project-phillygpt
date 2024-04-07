import React from 'react';

const SuggestionsContainer = ({ suggestions }) => {
    return (
        <div className="suggestion-prompt-container">
          <div className="suggestion-heading">
            We're unable to find what you're looking for. Here are some suggestions to improve your prompt:
          </div>
          <ul className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      );
    };

export default SuggestionsContainer;
