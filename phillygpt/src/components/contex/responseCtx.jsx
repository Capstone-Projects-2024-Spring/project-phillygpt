import React, {createContext, useState} from 'react';

export const responseCtx = createContext();

export const ResponseProvider = ({ children }) => {

    const [responseDataSQL, setResponseDataSQL] = useState(null);

    return(
        <responseCtx.Provider value={{ responseDataSQL, setResponseDataSQL }}>
            {children}
        </responseCtx.Provider>
    )
}