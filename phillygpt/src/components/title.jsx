import React from 'react';
import { Link } from 'react-router-dom';
import CheckClass from './DarkMode/checkClass';

const shouldShowDescription = (route) => {
  return route === '/';
};

const Title = ({ route }) => {
  const showDescription = shouldShowDescription(route);
  const isDark = CheckClass();

  return (
    <div>
      <Link to="/" className={`block pt-20 text-${isDark ? 'white' : 'black'} text-center p-4 font-extrabold text-4xl`}>
        PhillyGPT
      </Link>
      {showDescription && (
        <div className={`text-${isDark ? 'white' : 'black'} text-center mb-4`}>
          This is a temporary description for PhillyGPT
        </div>
      )}
    </div>
  );
};

export default Title;
