import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import random from '../../assets/icons/random.svg';
import randomActive from '../../assets/icons/random-active.svg';
import cup from '../../assets/icons/cup.svg';
import cupActive from '../../assets/icons/cup-active.svg';
import home from '../../assets/icons/home.svg';
import homeActive from '../../assets/icons/home-active.svg';
import tv from '../../assets/icons/tv.svg';
import tvActive from '../../assets/icons/tv-active.svg';

import MovieListSearch from '../Search/Search';

import { useGlobalState } from '../../context/GlobalStateContext';

const Header = () => {
  const { resetPageSettings } = useGlobalState();

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" onClick={resetPageSettings}>
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
          <Link className="header__nav_link" to="/" onClick={resetPageSettings}>
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

          <Link className="header__nav_link" to="/" onClick={resetPageSettings}>
            <button className="header__nav_button">
              <img
                className="header__nav_img header__nav_default"
                src={cup}
                alt="random"
              />
              <img
                className="header__nav_img header__nav_active"
                src={cupActive}
                alt="random"
              />
            </button>
          </Link>

          <Link className="header__nav_link" to="/" onClick={resetPageSettings}>
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
