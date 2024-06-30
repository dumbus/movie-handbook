import React from 'react';

import { getSearchQuery } from '../../../utils/getSearchQuery';

const MovieListTitle = ({ page, listType }) => {
  let titleContent = 'Самые популярные фильмы';

  switch (listType) {
    case 'popular':
      titleContent = 'Самые популярные фильмы';
      break;

    case 'best':
      titleContent = 'Самые высокооценённые фильмы';
      break;

    case 'newest':
      titleContent = 'Самые свежие фильмы';
      break;

    default:
      titleContent = `Фильмы по запросу: ${getSearchQuery(listType)}`;
      break;
  }

  return (
    <>
      <h1 className="movie-list__subtitle title">{titleContent}</h1>
      <h3 className="movie-list__subtitle title">{`Текущая страница: ${page}`}</h3>
    </>
  );
};

export default MovieListTitle;
