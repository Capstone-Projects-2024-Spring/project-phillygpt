import React from 'react';

const SuggestionButton = ({ text, onClick }) => {
  return (
    <div
      className="suggestion-button w-full max-w-lg bg-blue-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-blue-600 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SuggestionButton;
