import React, { useContext } from 'react';
import CheckClass from './DarkMode/checkClass';
import { responseCtx } from './contex/responseCtx';

const ResponseBox = ({ response }) => {
  const isDark = CheckClass();
  const { responseDataSQL } = useContext(responseCtx);

  // Parse the JSON string into an object
  const parsedResponse = JSON.parse(responseDataSQL);

  // Function to dynamically generate table headers based on record keys
  const generateTableHeaders = () => {
    if (!parsedResponse || !Array.isArray(parsedResponse) || parsedResponse.length === 0) {
      return [];
    }
    const firstRecord = parsedResponse[0];
    return Object.keys(firstRecord);
  };

  return (
    <div className={`response-container w-1/2 h-full ${isDark ? 'bg-gray-navbar' : 'bg-responsebg'} rounded-lg border border-gray-400 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Dynamic Response Section for Displaying Data */}
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Response</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`} style={{ maxHeight: '250px', overflow: 'auto' }}>
          {parsedResponse && parsedResponse.length > 0 ? (
            <div style={{ maxWidth: '100%', overflow: 'auto' }}>
              {parsedResponse.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          ) : (
            <p>Awaiting data...</p>
          )}
        </div>
      </div>

      {/* Static Sections (for future dynamic content once backend is connected) */}
      <hr className={`${isDark ? 'border-white' : 'border-black'} my-4`} />
      <div className="sql-query-section mb-4">
        <h2 className="text-xl mb-2">SQL Query</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>{responseDataSQL ? parsedResponse.query : "Awaiting user input..."}</p>
        </div>
      </div>

      <hr className={`${isDark ? 'border-white' : 'border-black'} my-4`} />
      <div className="tables-accessed-section">
        <h2 className="text-xl mb-2">Tables Accessed</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>Text for Tables Accessed should be put here.</p>
        </div>
      </div>
    </div>
  );
};

export default ResponseBox;
