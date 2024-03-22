import React from 'react';
import CheckClass from './DarkMode/checkClass';

const ResponseBox = () => {
  const isDark = CheckClass();

  return (
    <div className={`response-container w-1/2 h-full ${isDark ? 'bg-gray-navbar' : 'bg-responsebg'} rounded-lg border border-gray-400 p-4 ${isDark ? 'text-white' : 'text-black'}`}>
      <div className="response-section mb-4">
        <h2 className="text-xl mb-2">Response</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>Text for the response should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
      <hr className={`${isDark ? 'border-white' : 'border-black'} my-4`} />
      <div className="sql-query-section mb-4">
        <h2 className="text-xl mb-2">SQL Query</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>Text for SQL Query should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
      <hr className={`${isDark ? 'border-white' : 'border-black'} my-4`} />
      <div className="tables-accessed-section">
        <h2 className="text-xl mb-2">Tables Accessed</h2>
        <div className={`text-display ${isDark ? 'bg-darkgray' : 'bg-responsecodebox'} p-2 rounded-lg`}>
          <p>Text for Tables Accessed should be put here.</p> {/*THIS WILL NEED TO BE REPLACED AFTER CONNECTING BACKEND*/}
        </div>
      </div>
    </div>
  );
}

export default ResponseBox;
