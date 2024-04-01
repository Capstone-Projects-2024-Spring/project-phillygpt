import React from 'react';
import ResponseBox from "./responsebox.jsx";
import {useLocation} from 'react-router-dom';
import Examples from './examples';
import CheckClass from './DarkMode/checkClass';

const DisplayArea = () => {

  const route = useLocation().pathname;

  const isDark = CheckClass();

  const exampleQuestions = [
    "What farmers markets will happen this weekend?",
    "What time is the Head House square farmers market open?",
    "How many farmers markets will there be on the weekdays?",
    "What time does the Rittenhouse Square farmers market end?",
  ];

  const handleQuestionClick = (questionText) => {
    // Implement more logic for when an example question is clicked
    // For now a console log is okay
    console.log(`Question clicked: ${questionText}`);
  };

  return (
    <div className="display-area-container mx-8 mt-8 mb-4">
      <div className="display-area flex justify-center items-center">
        <div className="map-container w-1/2 h-full bg-gray-200 mr-4 rounded-lg overflow-hidden"> 
          <img src="https://via.placeholder.com/300x200" alt="Default Map" className="w-full h-full object-cover" />
        </div>
         {/* Conditionally render based on the route */}
         {route === '/' || route === '/home' ? (
           <div className="example-questions-container flex flex-col items-center">
           <h2 className={`text-center mb-4 font-lightbold ${isDark ? 'text-white' : 'text-black'}`}>Try out these prompts:</h2>
           {exampleQuestions.map((question, index) => (
             <div key={index} className="mb-4">
               <Examples
                 text={question}
                 onClick={() => handleQuestionClick(question)}
               />
             </div>
           ))}
         </div>
        ) : route === '/response' && <ResponseBox />}
      </div>
      </div>
  );
}

export default DisplayArea;

// import React, { useState } from 'react';
// import ResponseBox from "./responsebox.jsx";
// import { useLocation } from 'react-router-dom';
// import Examples from './examples';
// import CheckClass from './DarkMode/checkClass';

// const DisplayArea = () => {
//   const route = useLocation().pathname;
//   const isDark = CheckClass();

//   const exampleQuestions = [
//     "Can you give me a list of farmers markets?",
//     "What time is the Head House square farmers market open?",
//     "How many farmers markets will there be on the weekdays?",
//     "What time does the Rittenhouse Square farmers market end?",
//   ];

//   // State to store the API response
//   const [apiResponse, setApiResponse] = useState(null);

//   const handleQuestionClick = (questionText) => {
//     console.log(`Question clicked: ${questionText}`);
//     if (questionText === "Can you give me a list of farmers markets?") {
//       // Replace 'your-api-url' with the actual URL of your API
//       fetch('http://127.0.0.1:5000/data')
//         .then(response => response.json())
//         .then(data => {
//           setApiResponse(data);
//         })
//         .catch(error => {
//           console.error('Error fetching data: ', error);
//           setApiResponse(null);
//         });
//     }
//   };

//   return (
//     <div className="display-area-container mx-8 mt-8 mb-4">
//       <div className="display-area flex justify-center items-center">
//         <div className="map-container w-1/2 h-full bg-gray-200 mr-4 rounded-lg overflow-hidden">
//           {/* Display API response here */}
//           <ResponseBox response={apiResponse} />
//         </div>
//          {/* Conditionally render based on the route */}
//          {route === '/' || route === '/home' ? (
//            <div className="example-questions-container flex flex-col items-center">
//              <h2 className={`text-center mb-4 font-lightbold ${isDark ? 'text-white' : 'text-black'}`}>Try out these prompts:</h2>
//              {exampleQuestions.map((question, index) => (
//                <div key={index} className="mb-4">
//                  <Examples
//                    text={question}
//                    onClick={() => handleQuestionClick(question)}
//                  />
//                </div>
//              ))}
//            </div>
//          ) : route === '/response' && <ResponseBox response={apiResponse} />}
//       </div>
//     </div>
//   );
// }

// export default DisplayArea;
