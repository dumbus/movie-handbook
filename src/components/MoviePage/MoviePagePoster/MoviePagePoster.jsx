import React from 'react';

import './MoviePagePoster.scss';

import posterTemplate from '../../../assets/poster.webp';

const MoviePagePoster = ({ movieData }) => {
  const { posterUrl, name } = movieData;

  return (
    <div className="movie-list__item_poster">
      <div className="movie-page__poster_wrapper block">
        <img
          src={posterTemplate}
          alt={name}
          className="movie-page__poster_image movie-page__poster_placeholder"
        />
        <img
          className="movie-page__poster_image movie-page__poster_actual"
          src={posterUrl || posterTemplate}
          alt={name}
        />
      </div>
    </div>
  );
};

export default MoviePagePoster;
