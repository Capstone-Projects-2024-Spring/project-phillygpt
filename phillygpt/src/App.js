import React, { useState} from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import SearchBar from './components/searchbar.jsx';
import DisplayArea from './components/displayArea.jsx';
import Title from './components/title.jsx';
import MyButton from './components/examplePromptOne.jsx';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import CheckClass from './components/DarkMode/checkClass.jsx';

function App() {
  const [userInput, setUserInput] = useState('');
  
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(userInput);
  };

  const isDark = CheckClass(); //This is to check for dark mode vs not
  
  return (
    <div className={`bg-${isDark ? 'darkgray' : 'white'} min-h-screen`}>
      {/* Navbar*/}
      <Navbar />

      {/*Title*/}
      <Title route = {'/'}/> {/* TEMP ROUTING UNTIL ROUTES ARE SET UP */}

      {/*SearchBar + Button*/}
      <SearchBar
        userInput = {userInput}
        handleInputChange = {handleInputChange}
        handleButtonClick = {handleButtonClick}/>

      {/*/User story 3 example prompt 1 button*/}
      <MyButton handleButtonClick={handleButtonClick} />


      {/*Display area + Response Box*/}
      <div className="display-area-container">
        <DisplayArea route={'/response'} /> {/* TEMP until routing is set up ALSO NOTE: if route = / then suggestions should be here instead.*/}
      </div>
    </div>
  );
}

export default App;
