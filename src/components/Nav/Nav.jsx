import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

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

const Nav = () => {
  return (
    <nav className="nav">
      <Link className="nav_link" to="/random">
        <button className="nav_button">
          <img className="nav_img nav_default" src={random} alt="random" />
          <img className="nav_img nav_active" src={randomActive} alt="random" />
        </button>
      </Link>

      <Link className="nav_link" to="/movies/popular/1">
        <button className="nav_button">
          <img className="nav_img nav_default" src={popular} alt="popular" />
          <img
            className="nav_img nav_active"
            src={popularActive}
            alt="popular"
          />
        </button>
      </Link>

      <Link className="nav_link" to="/movies/best/1">
        <button className="nav_button">
          <img className="nav_img nav_default" src={best} alt="best" />
          <img className="nav_img nav_active" src={bestActive} alt="best" />
        </button>
      </Link>

      <Link className="nav_link" to="/movies/newest/1">
        <button className="nav_button">
          <img className="nav_img nav_default" src={newest} alt="newest" />
          <img className="nav_img nav_active" src={newestActive} alt="newest" />
        </button>
      </Link>

      <Link className="nav_link" to="/">
        <button className="nav_button">
          <img className="nav_img nav_default" src={home} alt="random" />
          <img className="nav_img nav_active" src={homeActive} alt="random" />
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
