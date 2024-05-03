import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MovieListPage.scss';

import posterTemplate from '../../assets/poster.webp';
import errorImage from '../../assets/icons/error.svg';

import { useGlobalState } from '../../context/GlobalStateContext';

import MovieService from '../../services/MovieService';

import MovieListSearch from './MovieListSearch/MovieListSearch';
import Paginator from '../Paginator/Paginator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

const MovieListPage = () => {
  const { pageSettings, isLoading, setLoading, hasError, setError } =
    useGlobalState();
  const { listType, page, searchQuery } = pageSettings;

  const [movieList, setMovieList] = useState([]);
  // const [hasError, setError] = useState(false);
  const [pages, setPages] = useState(null);

  const movieService = new MovieService();

  useEffect(() => {
    setLoading(true);

    window.scrollTo(0, 0);
    onRequest(listType);
  }, [pageSettings]);

  const onRequest = (type) => {
    switch (type) {
      case 'default':
        movieService.getMovies(page).then(onMoviesListLoaded).catch(onError);
        break;

      case 'search':
        movieService
          .getMoviesByName(searchQuery, page)
          .then(onMoviesListLoaded)
          .catch(onError);
        break;

      default:
        movieService.getMovies(page).then(onMoviesListLoaded).catch(onError);
        break;
    }
  };

  const onMoviesListLoaded = ({ pages, movieList }) => {
    setMovieList(movieList);
    setPages(pages);
    setLoading(false);
  };

  const onError = (error) => {
    console.log(error);

    setError(true);
    setLoading(false);
  };

  const renderMovieList = (itemsData) => {
    const listItems = itemsData.map((itemData) => {
      const { id, name, year, posterUrl, countries, rating } = itemData;

      if (!id) return;

      return (
        <Link to={`/movies/${id}`} key={id}>
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

    if (!listItems.length) {
      const errorContent = (
        <div className="error-message">
          <img
            className="error-message__image"
            src={errorImage}
            alt="error-image"
          />

          <div className="error-message__title">
            По вашему запросу ничего не нашлось....
          </div>
        </div>
      );

      return <ErrorMessage content={errorContent} />;
    }

    return (
      <>
        <ul className="movie-list__list">{listItems}</ul>

        <Paginator pages={pages} />
      </>
    );
  };

  const renderListTitle = (listType) => {
    if (listType === 'search') {
      return (
        <h2 className="movie-list__subtitle title">{`Список фильмов по запросу ${searchQuery}`}</h2>
      );
    }

    return (
      <h2 className="movie-list__subtitle title">Список лучших фильмов</h2>
    );
  };

  const list = renderMovieList(movieList);
  const listTitle = renderListTitle(listType);

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? list : null;

  return (
    <ErrorBoundary>
      <div className="movie-list container">
        <h1 className="movie-list__title title">Энциклопедия кино</h1>
        {listTitle}
        <h3 className="movie-list__subtitle title">{`Текущая страница: ${page}`}</h3>

        <MovieListSearch />
        {spinner}
        {error}
        {content}
      </div>
    </ErrorBoundary>
  );
};

export default MovieListPage;
