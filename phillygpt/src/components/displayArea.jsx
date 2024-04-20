import React from 'react';
import ResponseBox from "./responsebox.jsx";
import {useLocation} from 'react-router-dom';
import Examples from './examples';
import CheckClass from './DarkMode/checkClass';
import Loading from './loading.jsx';
import { useContext } from 'react';
import { LoadingContext } from './contex/loadingCtx.jsx';
import { responseCtx } from './contex/responseCtx.jsx';
import MapPage from './map/app.tsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayArea = () => {
  const navigate = useNavigate();
  const route = useLocation().pathname;
  const isDark = CheckClass();
  const {isLoading, setLoading} = useContext(LoadingContext); 
  const {responseSQLData} = useContext(responseCtx);
  const {setResponseDataSQL} = useContext(responseCtx);
  const {resultSQLData} = useContext(responseCtx);
  const {setResultDataSQL} = useContext(responseCtx);

  const exampleQuestions = [
    "What farmers markets will happen this weekend?",
    "Can you show me how many people are vaccinated within Philly?",
    "Can you show me a list of bike stations?",
    "Can you list college buildings around the city?",
  ];

  const handleQuestionClick = async (questionText) => {
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/process_input', {
        user_input: questionText,
      });
      setResponseDataSQL(response.data.OPENAI_RESPONSE);
      setResultDataSQL(response.data.RESULT);
      setLoading(false);
      navigate(`/response?input=${encodeURIComponent(questionText)}`);
    }
    
    catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }

    finally {
      setLoading(false);
    }
  };

  return (
    <div className="display-area-container mx-8 mt-8 mb-4">
      <div className="display-area flex justify-center items-center">
        
        {isLoading ? (<Loading />) : (
        <>
          <div className="map-container w-[900px] h-[600px] bg-gray-200 mr-4 rounded-lg overflow-hidden">
            <MapPage/>
          </div>
          {/* Conditionally render based on the route */}
          {route === '/' || route === '/home' ? (
            <div className="example-questions-container flex flex-col items-center">
              <h2 className={`text-center mb-4 font-lightbold ${isDark ? 'text-white' : 'text-black'}`}>Try out these prompts:</h2>
              {exampleQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <Examples text={question} onClick={() => handleQuestionClick(question)} />
              </div>
            ))}
            </div>
          ) : route === '/response' && <ResponseBox responseSQL = {responseSQLData} resultSQL={resultSQLData} />}
        </>
      )}
      </div>
    </div>
  );
}

export default DisplayArea;