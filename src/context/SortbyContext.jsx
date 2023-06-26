import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortBy = () => {
    setSortBy('name');
  };

  const resetSortBy = () => {
    setSortBy('');
  };

  return (
    <AppContext.Provider value={{ sortBy, handleSortBy, resetSortBy }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };