import React from 'react';
import CheckClass from './DarkMode/checkClass';

const shouldShowDescription = (route) => {
  return route === '/';
};

const Title = ({ route }) => {
  const showDescription = shouldShowDescription(route);
  const isDark = CheckClass();
  return (
    <div>
      <div className={`pt-20 text-${isDark ? 'white' : 'black'} text-center p-4 font-extrabold text-4xl`}>PhillyGPT</div>
      {showDescription && (
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4`}>
          This is a temporary description for PhillyGPT
        </div>
      )}
    </div>
  );
};

export default Title;
