import React, { createContext, useState } from 'react';

export const responseCtx = createContext();

export const ResponseProvider = ({ children }) => {
    const [responseDataSQL, setResponseDataSQL] = useState(null);
    const [resultDataSQL, setResultDataSQL] = useState(null);

    return (
        <responseCtx.Provider value={{ responseDataSQL, setResponseDataSQL, resultDataSQL, setResultDataSQL }}>
            {children}
        </responseCtx.Provider>
    );
};
