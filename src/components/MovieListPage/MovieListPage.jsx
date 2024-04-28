import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MovieListPage.scss';

import basePoster from '../../assets/poster.webp';

import MovieService from '../../services/MovieService';

import Paginator from '../Paginator/Paginator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

import { getMockupMoviesList } from '../../utils/getMockupData';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [page, setPage] = useState(
    Number(localStorage.getItem('pagination-page')) || 1
  );
  const [pages, setPages] = useState(null);

  // eslint-disable-next-line
  const movieService = new MovieService();

  useEffect(() => {
    onRequest(page);
  }, [page]);

  // eslint-disable-next-line
  const onRequest = (page) => {
    // =========== for local testing ===========
    setTimeout(() => {
      const mockupData = getMockupMoviesList();
      onMoviesListLoaded(mockupData);
    }, 1000);
    // =========================================

    // movieService.getMovies(page)
    //   .then(onMoviesListLoaded)
    //   .catch(onError);
  };

  const onMoviesListLoaded = ({ pages, movieList }) => {
    setMovieList(movieList);
    setPages(pages);
    setLoading(false);
  };

  // eslint-disable-next-line
  const onError = (error) => {
    setError(true);
    setLoading(false);
  };

  const onPageSwitch = (offset) => {
    setLoading(true);
    localStorage.setItem('pagination-page', page + offset);
    setPage((page) => page + offset);
    window.scrollTo(0, 0);

    onRequest(page + offset);
  };

  const renderMovieList = (itemsData) => {
    const listItems = itemsData.map((itemData) => {
      const { id, name, year, posterUrl, countries, rating } = itemData;

      return (
        <Link to={`/movies/${id}`} key={id}>
          <li className="movie-list__item" key={id}>
            <img
              className="movie-list__item_image"
              src={posterUrl || basePoster}
              alt={name}
            />

            <div className="movie-list__item_caption">
              <div className="movie-list__item_rating">{rating}</div>
              <div className="movie-list__item_name">{`${name} (${year})`}</div>
              <div className="movie-list__item_country">{countries}</div>
            </div>
          </li>
        </Link>
      );
    });

    return (
      <>
        <ul className="movie-list__list">{listItems}</ul>

        <Paginator
          page={page}
          isLoading={isLoading}
          onPageSwitch={onPageSwitch}
          pages={pages}
        />
      </>
    );
  };

  const list = renderMovieList(movieList);

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? list : null;

  return (
    <ErrorBoundary>
      <div className="movie-list container">
        <h2 className="movie-list__title title">Список фильмов</h2>
        <h3 className="movie-list__subtitle title">{`Текущая страница: ${page}`}</h3>

        {spinner}
        {error}
        {content}
      </div>
    </ErrorBoundary>
  );
};

export default MovieListPage;
