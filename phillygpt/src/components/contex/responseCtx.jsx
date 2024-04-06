import React, {createContext, useState} from 'react';

export const responseSQLCtx = createContext();

export const ResponseSQLProvider = ({ children }) => {

    const [responseDataSQL, setResponseDataSQL] = useState(null);

    return(
        <responseSQLCtx.Provider value={{ responseDataSQL, setResponseDataSQL }}>
            {children}
        </responseSQLCtx.Provider>
    )
}