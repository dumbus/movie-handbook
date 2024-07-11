import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import random from '../../assets/icons/header/random.svg';
import randomActive from '../../assets/icons/header/random-active.svg';
import popular from '../../assets/icons/header/popular.svg';
import popularActive from '../../assets/icons/header/popular-active.svg';
import best from '../../assets/icons/header/best.svg';
import bestActive from '../../assets/icons/header/best-active.svg';
import newest from '../../assets/icons/header/newest.svg';
import newestActive from '../../assets/icons/header/newest-active.svg';
import home from '../../assets/icons/header/home.svg';
import homeActive from '../../assets/icons/header/home-active.svg';
import tv from '../../assets/icons/header/tv.svg';
import tvActive from '../../assets/icons/header/tv-active.svg';

import MovieListSearch from '../Search/Search';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
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

        <MovieListSearch />

        <nav className="header__nav">
          <Link className="header__nav_link" to="/random">
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={random}
                alt="random"
              />
              <img
                className="header__nav_img header__nav_active"
                src={randomActive}
                alt="random"
              />
            </button>
          </Link>

          <Link className="header__nav_link" to="/movies/popular/1">
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={popular}
                alt="popular"
              />
              <img
                className="header__nav_img header__nav_active"
                src={popularActive}
                alt="popular"
              />
            </button>
          </Link>

          <Link className="header__nav_link" to="/movies/best/1">
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={best}
                alt="best"
              />
              <img
                className="header__nav_img header__nav_active"
                src={bestActive}
                alt="best"
              />
            </button>
          </Link>

          <Link className="header__nav_link" to="/movies/newest/1">
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={newest}
                alt="newest"
              />
              <img
                className="header__nav_img header__nav_active"
                src={newestActive}
                alt="newest"
              />
            </button>
          </Link>

          <Link className="header__nav_link" to="/">
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={home}
                alt="random"
              />
              <img
                className="header__nav_img header__nav_active"
                src={homeActive}
                alt="random"
              />
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
