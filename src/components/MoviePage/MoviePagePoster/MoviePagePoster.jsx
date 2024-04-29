import React from 'react';

import './MoviePagePoster.scss';

import basePoster from '../../../assets/poster.webp';

const MoviePagePoster = ({ movieData }) => {
  const { posterUrl, name } = movieData;

  return (
    <div className="movie-page__poster_wrapper block">
      <img
        className="movie-page__poster_image"
        src={posterUrl || basePoster}
        alt={name}
      />
    </div>
  );
};

export default MoviePagePoster;
