// src/pages/home.jsx
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchbar';
import DisplayArea from '../components/displayArea';
import Title from '../components/title';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [initialInput, setInitialInput] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const inputFromUrl = searchParams.get('input');
    if (inputFromUrl) setInitialInput(inputFromUrl);
  }, [location.search]);

  return (
    <div>
      {/*Title*/}
      <Title route={'/'} />

      {/*SearchBar + Button*/}
      <SearchBar initialInput={initialInput} />

      {/*Display area + Response Box*/}
      <div className="display-area-container">
        <DisplayArea />
      </div>
    </div>
  );
};

export default HomePage;
