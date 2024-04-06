import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import HomePage from './pages/home.jsx';
import ResponsePage from './pages/response.jsx';
import RepromptPage from './pages/reprompt.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CheckClass from './components/DarkMode/checkClass.jsx';
import MapPage from './components/map/app.tsx';
import { LoadingProvider } from './components/contex/loadingCtx.jsx';
import { ResponseSQLProvider } from './components/contex/responseCtx.jsx';

function App() {

  const isDark = CheckClass(); //This is to check for dark mode vs not
  
  return (
    <ResponseSQLProvider>
      <LoadingProvider>
        <Router>
          <div className={`${isDark ? 'bg-darkgray' : 'bg-lm_body'} min-h-screen`}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/home" element={<HomePage/>} />
              <Route path="/response" element={<ResponsePage/>} />
              <Route path="/reprompt" element={<RepromptPage/>} />
              <Route path="/map" element={<MapPage/>} />
            </Routes>
          </div>
        </Router>
      </LoadingProvider>
    </ResponseSQLProvider>
  );
}

export default App;
