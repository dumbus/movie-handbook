import React from 'react';

import './MoviePageHeader.scss';

const MoviePageHeader = ({ movieData }) => {
  const { name, year, alternativeName, shortDescription } = movieData;

  return (
    <div className="movie-page__header block">
      <h2 className="movie-page__header_title movie-page__header_item title">{`${name} (${year})`}</h2>
      <h3 className="movie-page__header_subtitle movie-page__header_item title">
        {alternativeName}
      </h3>
      <div className="movie-page__header_short-description movie-page__header_item">
        {shortDescription}
      </div>
    </div>
  );
};

export default MoviePageHeader;
