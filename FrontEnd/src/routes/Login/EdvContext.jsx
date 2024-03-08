// EdvContext.js
import React, { createContext, useContext, useState } from 'react';

const EdvContext = createContext();

export const EdvProvider = ({ children }) => {
  const [edv, setEdv] = useState('');

  const setEdvValue = (newValue) => {
    setEdv(newValue);
  };

  return (
    <EdvContext.Provider value={{ edv, setEdvValue }}>
      {children}
    </EdvContext.Provider>
  );
};

export const useEdv = () => {
  const context = useContext(EdvContext);

  if (!context) {
    throw new Error('useEdv must be used within an EdvProvider');
  }

  return context;
};
