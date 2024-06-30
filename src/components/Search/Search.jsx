import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Search.scss';

const Search = () => {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setShowAlert(false);
  }, []);

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
      navigate(`/movies/search=${searchName}/1`);
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
