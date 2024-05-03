import React, { createContext, useState, useContext } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [pageSettings, setPageSettings] = useState({
    listType: sessionStorage.getItem('list-type') || 'default',
    page: Number(sessionStorage.getItem('pagination-page')) || 1,
    searchQuery: sessionStorage.getItem('search-query') || ''
  });

  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const resetPageSettings = () => {
    setLoading(true);

    sessionStorage.setItem('list-type', 'default');
    sessionStorage.setItem('pagination-page', 1);
    sessionStorage.setItem('search-query', '');
    sessionStorage.setItem('search-name', '');

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
        setLoading,
        hasError,
        setError
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
