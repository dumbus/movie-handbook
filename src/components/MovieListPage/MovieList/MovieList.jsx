import React from 'react';
import { Link } from 'react-router-dom';

import './MovieList.scss';

import posterTemplate from '../../../assets/poster.webp';

import Paginator from '../../Paginator/Paginator';
import ErrorNotFound from '../../ErrorNotFound/ErrorNotFound';

const MovieList = ({ movieList, page, pages, listType }) => {
  const list = movieList.map((itemData) => {
    const { id, name, year, posterUrl, countries, rating } = itemData;

    if (!id) return null;

    return (
      <Link to={`/movie/${id}`} key={id}>
        <li className="movie-list__item">
          <div className="movie-list__item_poster">
            <div className="movie-list__item_poster-wrapper">
              <img
                src={posterTemplate}
                alt={name}
                className="movie-list__item_poster-image movie-list__item_poster-placeholder"
              />
              <img
                className="movie-list__item_poster-image"
                src={posterUrl || posterTemplate}
                alt={name}
              />
            </div>
          </div>

          <div className="movie-list__item_caption">
            <div className="movie-list__item_rating">{rating}</div>
            <div className="movie-list__item_name">{`${name} (${year})`}</div>
            <div className="movie-list__item_country">{countries}</div>
          </div>
        </li>
      </Link>
    );
  });

  const hasMovies = list.length > 0;

  return (
    <>
      {hasMovies ? (
        <>
          <ul className="movie-list__list">{list}</ul>
          <Paginator
            page={Number(page)}
            pages={Number(pages)}
            listType={listType}
          />
        </>
      ) : (
        <ErrorNotFound />
      )}
    </>
  );
};

export default MovieList;
