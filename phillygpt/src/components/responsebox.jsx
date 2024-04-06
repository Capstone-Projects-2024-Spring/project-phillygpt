import React, { useContext } from 'react';
import CheckClass from './DarkMode/checkClass';
import { responseSQLCtx } from './contex/responseCtx';

const ResponseBox = ({ response }) => {
  const isDark = CheckClass();
  const getResponseSQL = useContext(responseSQLCtx);
  console.log(getResponseSQL);
  // Function to dynamically generate table headers based on record keys
  const generateTableHeaders = () => {
    if (!response || !Array.isArray(response) || response.length === 0) {
      return [];
    }
    const firstRecord = response[0];
    return Object.keys(firstRecord);
  };

  return (
    <div className={`response-container w-1/2 h-full ${isDark ? 'bg-gray-navbar' : 'bg-responsebg'} rounded-lg border border-gray-400 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Dynamic Response Section for Displaying Market Data */}
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Market Data</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`} style={{ maxHeight: '250px', overflow: 'auto' }}>
          {response && Array.isArray(response) && response.length > 0 ? (
            <div style={{ maxWidth: '100%', overflow: 'auto' }}>
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr>
                    {generateTableHeaders().map((header, index) => (
                      <th key={index} className="border border-gray-400 p-2 font-bold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {response.map((record, index) => (
                    <tr key={index}>
                      {generateTableHeaders().map((header, index) => (
                        <td key={index} className="border border-gray-400 p-2">{record[header]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>Awaiting market data...</p>
          )}
        </div>
      </div>
  

      {/* Static Sections (for future dynamic content once backend is connected) */}
      <hr className={`${isDark ? 'border-white' : 'border-black'} my-4`} />
      <div className="sql-query-section mb-4">
        <h2 className="text-xl mb-2">SQL Query</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>{getResponseSQL.responseDataSQL}</p>
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
