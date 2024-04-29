import React, { createContext, useState, useContext } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [pageSettings, setPageSettings] = useState({
    listType: localStorage.getItem('list-type') || 'default',
    page: Number(localStorage.getItem('pagination-page')) || 1,
    searchQuery: localStorage.getItem('search-query') || ''
  });

  const [isLoading, setLoading] = useState(true);

  const resetPageSettings = () => {
    setLoading(true);

    localStorage.setItem('list-type', 'default');
    localStorage.setItem('pagination-page', 1);
    localStorage.setItem('search-query', '');
    localStorage.setItem('search-name', '');

    setPageSettings({
      listType: 'default',
      page: 1,
      searchQuery: ''
    });
  };

  return (
    <GlobalStateContext.Provider
      value={{
        resetPageSettings,
        pageSettings,
        setPageSettings,
        isLoading,
        setLoading
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
