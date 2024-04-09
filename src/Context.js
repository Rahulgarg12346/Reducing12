import React, { createContext  } from 'react';

// Create context
const CounterContext = createContext();

// Create provider component
export const CounterProvider = ({ children }) => {
 
 

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
