import React from 'react'

import './MoviePagePoster.scss';

const MoviePagePoster = ({ movieData }) => {
  const { posterUrl } = movieData;

  return (
    <div className='movie-page__poster_wrapper block'>
      <img className='movie-page__poster_image' src={posterUrl} alt='poster' />
    </div>
  );
};

export default MoviePagePoster;
