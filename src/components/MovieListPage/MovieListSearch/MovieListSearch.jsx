import React, { useState, useEffect } from 'react';

import './MovieListSearch.scss';

import { useGlobalState } from '../../../context/GlobalStateContext';

const MovieListSearch = () => {
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
    <div className="movie-list__search block">
      <h4 className="movie-list__search_title title">Поиск по названию:</h4>

      <div className="movie-list__search_settings">
        <form className="movie-list__search_form" onSubmit={handleSubmit}>
          <label
            className={`movie-list__search_label ${showAlert ? '' : 'hidden'}`}
            htmlFor="searchName"
          >
            Минимальная длина - 1 символ
          </label>
          <input
            id="searchName"
            className="movie-list__search_input"
            name="searchName"
            type="text"
            placeholder="Название фильма"
            onChange={handleChange}
            value={searchName}
          />
        </form>
      </div>
    </div>
  );
};

export default MovieListSearch;
