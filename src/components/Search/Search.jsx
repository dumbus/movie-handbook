import React, { useState, useEffect } from 'react';

import './Search.scss';

import { useGlobalState } from '../../context/GlobalStateContext';

const Search = () => {
  const { pageSettings, setPageSettings, setLoading } = useGlobalState();
  const { searchQuery } = pageSettings;

  const [showAlert, setShowAlert] = useState(false);
  const [searchName, setSearchName] = useState(
    sessionStorage.getItem('search-name') || ''
  );

  useEffect(() => {
    setSearchName(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    setShowAlert(false);
  }, [pageSettings]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchName.length <= 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      window.scrollTo(0, 0);
      setLoading(true);

      sessionStorage.setItem('list-type', 'search');
      sessionStorage.setItem('pagination-page', 1);
      sessionStorage.setItem('search-query', searchName);
      sessionStorage.setItem('search-name', searchName);

      setPageSettings((prevPageSettings) => ({
        ...prevPageSettings,
        listType: 'search',
        page: 1,
        searchQuery: searchName
      }));
    }
  };

  return (
    <div className="search">
      <form className="search_form" onSubmit={handleSubmit}>
        <label
          className={`search_label ${showAlert ? '' : 'hidden'}`}
          htmlFor="searchName"
        >
          Минимальная длина - 1 символ
        </label>
        <input
          id="searchName"
          className="search_input"
          name="searchName"
          type="text"
          placeholder="Название фильма"
          onChange={handleChange}
          value={searchName}
        />
      </form>
    </div>
  );
};

export default Search;
