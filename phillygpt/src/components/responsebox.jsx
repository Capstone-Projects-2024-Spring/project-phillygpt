import React from 'react';
import CheckClass from './DarkMode/checkClass';

const ResponseBox = ({ response }) => {
  const isDark = CheckClass();

  // Function to format each record for display
  const formatRecord = (record) => {
    // Assuming record structure: [id, longitude, latitude, marketName, address, zipCode]
    const [id, longitude, latitude, marketName, address, zipCode] = record;
    return `${marketName}, ${address}, ZIP: ${zipCode}`;
  };

  return (
    <div className={`response-container w-1/2 h-full ${isDark ? 'bg-gray-navbar' : 'bg-responsebg'} rounded-lg border border-gray-400 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
      {/* Dynamic Response Section for Displaying Market Data */}
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Market Data</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg overflow-y-auto`}>
          {response && Array.isArray(response) ? (
            <ul>
              {response.map((record, index) => (
                <li key={index}>{formatRecord(record)}</li>
              ))}
            </ul>
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
          <p>Text for SQL Query should be put here.</p>
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
