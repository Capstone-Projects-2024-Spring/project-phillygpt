import React, { createContext, useState } from 'react';

export const responseCtx = createContext();

export const ResponseProvider = ({ children }) => {
    const [responseDataSQL, setResponseDataSQL] = useState(null);
    const [resultDataSQL, setResultDataSQL] = useState(null);
    const [repromptSuggestions, setRepromptSuggestions] = useState([]);

    return (
        <responseCtx.Provider value={{ responseDataSQL, setResponseDataSQL, resultDataSQL, setResultDataSQL, repromptSuggestions, setRepromptSuggestions }}>
            {children}
        </responseCtx.Provider>
    );
};