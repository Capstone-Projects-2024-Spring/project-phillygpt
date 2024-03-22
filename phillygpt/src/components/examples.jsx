import React from 'react';
import CheckClass from './DarkMode/checkClass';

function Examples({ text, onClick }) {
  const isDark = CheckClass(); 

  return (
    <button
      className={`w-64 h-12 px-10 py-10 rounded-lg shadow-md font-medium tracking-wide transform transition-colors duration-200 text-sm flex items-center justify-between ${
        isDark ? 'bg-gray-navbar text-white' : 'bg-suggestionbox text-gray-800'
      } border border-transparent hover:border-gray-400`}
      onClick={onClick}
    >
      {text} 
      <span className="inline-block ml-2 transform translate-y-1">
        → {/* Little arrow that goes at the end of each example */}
      </span>
    </button>
  );
}

export default Examples;
