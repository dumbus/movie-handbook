import React, { useEffect, useState } from 'react';

import './MoviePageSimilar.scss';

const MoviePageSimilar = ({ movieData, setId }) => {
  const { similarMovies } = movieData;

  if (!similarMovies) {
    return null;
  }

  const renderSimilarList = (similarMovies) => {
    const similarListItems = similarMovies.map((similarMovie) => {
      const {
        id,
        name,
        rating,
        year,
        posterUrl
      } = similarMovie;

      return (
        <li className='movie-page__similar_item' key={id} onClick={() => setId(id)} >
          <img className='movie-page__similar_poster' src={posterUrl} alt='poster image' />

          <div className='movie-page__similar_description'>
            <div className='movie-page__similar_rating'>{rating}</div>
            <div className='movie-page__similar_name'>{`${name} (${year})`}</div>
          </div>  
        </li>
      )
    });

    return (
      <ul className='movie-page__similar_list'>
        {similarListItems}
      </ul>
    )
  };

  const similarList = renderSimilarList(similarMovies);

  return (
    <div className='movie-page__similar block'>
      <h3 className='movie-page__similar_title title'>Похожие</h3>

      {similarList}
    </div>
  )
};

export default MoviePageSimilar;
