import React from 'react';
import SearchBar from '../components/searchbar.jsx';
import DisplayArea from '../components/displayArea.jsx';
import Title from '../components/title.jsx';

const HomePage = () => {

  return (
    <div>
      {/*Title*/}
      <Title route={'/'} />

      {/*SearchBar + Button*/}
      <SearchBar/>

      {/*Display area + Response Box*/}
      <div className="display-area-container">
        <DisplayArea/>
      </div>
    </div>
  );
};

export default HomePage;
