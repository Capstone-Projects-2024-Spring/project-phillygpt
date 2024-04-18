import React, { useContext } from 'react';
import CheckClass from './DarkMode/checkClass';
import { responseCtx } from './contex/responseCtx';

const ResponseBox = ({ responseSQL, resultSQL }) => {
  const isDark = CheckClass();
  const { responseDataSQL, resultDataSQL } = useContext(responseCtx); // Destructure resultDataSQL directly from context

  // Parse the JSON string into an object
  const parsedResponse = JSON.parse(responseDataSQL);

  return (
    <div className={`response-container w-1/2 h-full ${isDark ? 'bg-gray-navbar' : 'bg-responsebg'} rounded-lg border border-gray-400 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Dynamic Response Section for Displaying Data */}
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Response</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`} style={{ maxHeight: '250px', overflow: 'auto' }}>
          {resultDataSQL ? (
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {Object.keys(resultDataSQL[0]).map((key, index) => (
                    <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultDataSQL.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, columnIndex) => (
                      <td key={columnIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
    </div>
  );
};

export default ResponseBox;
