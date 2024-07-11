import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import tv from '../../assets/icons/header/tv.svg';
import tvActive from '../../assets/icons/header/tv-active.svg';

import MovieListSearch from '../Search/Search';
import Nav from '../Nav/Nav';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((active) => !active);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__wrapper">
          <Link to="/">
            <div className="header__logo">
              <div className="header__logo_img">
                <img
                  className="header__logo_svg header__logo_default"
                  src={tv}
                  alt="tv"
                />
                <img
                  className="header__logo_svg header__logo_active"
                  src={tvActive}
                  alt="tv"
                />
              </div>

              <div className="header__logo_line" />
              <div className="header__logo_text">Энциклопедия кино</div>
            </div>
          </Link>

          <div className="header__menu">
            <MovieListSearch />
            <Nav />
          </div>

          <button
            className={`header__button ${isActive ? 'header__button_active' : ''}`}
            onClick={toggleActive}
          >
            <div className="header__button_item" />
            <div className="header__button_item" />
            <div className="header__button_item" />
          </button>
        </div>

        <div
          className={`header__mobile ${isActive ? 'header__mobile_active' : ''}`}
        >
          <MovieListSearch />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
