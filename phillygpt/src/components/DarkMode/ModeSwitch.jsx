import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

const ModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const htmlElement = document.documentElement;
    const savedMode = localStorage.getItem('darkMode');
    const isDarkClass = htmlElement.classList.contains('dark');
    
    if (savedMode === 'true' || isDarkClass) {
      enableDarkMode();
      setIsDarkMode(true);
    }
  }, []);
  

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    setIsDarkMode(newMode);
  };

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
  };

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="darkModeSwitch"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="darkModeSwitch"
        className="flex items-center cursor-pointer relative"
      >
        <span className="mr-5 text-white-400 dark:text-gray-200"> </span> 
        <div className="w-16 h-8 bg-gray-500 dark:bg-gray-800 rounded-full shadow-inner relative flex items-center">
          <div
            className={`absolute w-8 h-8 bg-white dark:bg-gray-300 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
              isDarkMode ? 'translate-x-full' : 'translate-x-0'
            }`}
            
          />
          <SunIcon
            className={`absolute left-1 w-5 h-5 text-yellow-400 ${
              isDarkMode ? 'opacity-70' : 'opacity-100'
            }`}
          />
          <MoonIcon
            className={`absolute right-1 w-5 h-5 text-gray-600 ${
              isDarkMode ? 'opacity-100' : 'opacity-70'
            }`}
          />
        </div>
        <span className="ml-5 text-white-400 dark:text-gray-200"> </span>
      </label>
    </div>
  );
};

export default ModeSwitch;
