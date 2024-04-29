import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MovieListPage.scss';

import posterTemplate from '../../assets/poster.webp';

import MovieService from '../../services/MovieService';

import Paginator from '../Paginator/Paginator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

import {
  getMockupMoviesList,
  // eslint-disable-next-line
  getMockupMoviesListByName
} from '../../utils/getMockupData';

const MovieListPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [pages, setPages] = useState(null);
  const [listType, setListType] = useState(
    localStorage.getItem('list-type') || 'default'
  );
  const [page, setPage] = useState(
    Number(localStorage.getItem('pagination-page')) || 1
  );
  const [searchName, setSearchName] = useState(
    localStorage.getItem('search-name') || ''
  );
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('search-query') || ''
  );

  // eslint-disable-next-line
  const movieService = new MovieService();

  useEffect(() => {
    onRequest(listType);
  }, [page, searchQuery]);

  const onRequest = (type) => {
    switch (type) {
      case 'default':
        // =========== for local testing ===========
        setTimeout(() => {
          const mockupData = getMockupMoviesList();
          onMoviesListLoaded(mockupData);
        }, 1000);
        // =========================================

        // movieService.getMovies(page)
        //   .then(onMoviesListLoaded)
        //   .catch(onError);
        break;

      case 'search':
        // =========== for local testing ===========
        setTimeout(() => {
          const mockupData = getMockupMoviesListByName(searchQuery);
          onMoviesListLoaded(mockupData);
        }, 1000);
        // =========================================

        // movieService
        //   .getMoviesByName(searchQuery, page)
        //   .then(onMoviesListLoaded)
        //   .catch(onError);
        break;

      default:
        // =========== for local testing ===========
        setTimeout(() => {
          const mockupData = getMockupMoviesList();
          onMoviesListLoaded(mockupData);
        }, 1000);
        // =========================================

        // movieService.getMovies(page)
        //   .then(onMoviesListLoaded)
        //   .catch(onError);
        break;
    }

    // if (type === 'default') {
    // } else if (type === 'search') {
    //   // =========== for local testing ===========
    //   // setTimeout(() => {
    //   //   const mockupData = getMockupMoviesListByName(searchQuery);
    //   //   onMoviesListLoaded(mockupData);
    //   // }, 1000);
    //   // =========================================

    //   movieService
    //     .getMoviesByName(searchQuery, page)
    //     .then(onMoviesListLoaded)
    //     .catch(onError);
    // }
  };

  const onMoviesListLoaded = ({ pages, movieList }) => {
    setMovieList(movieList);
    setPages(pages);
    setLoading(false);
  };

  // eslint-disable-next-line
  const onError = (error) => {
    console.log(error);

    setError(true);
    setLoading(false);
  };

  const onPageSwitch = (offset) => {
    window.scrollTo(0, 0);
    setLoading(true);

    localStorage.setItem('pagination-page', page + offset);
    setPage((page) => page + offset);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    window.scrollTo(0, 0);
    setLoading(true);

    localStorage.setItem('list-type', 'search');
    localStorage.setItem('pagination-page', 1);
    localStorage.setItem('search-query', searchName);
    localStorage.setItem('search-name', searchName);

    setListType('search');
    setPage(1);
    setSearchQuery(searchName);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchName(value);
  };

  const renderMovieList = (itemsData) => {
    const listItems = itemsData.map((itemData) => {
      const { id, name, year, posterUrl, countries, rating } = itemData;

      return (
        <Link to={`/movies/${id}`} key={id}>
          <li className="movie-list__item" key={id}>
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

        <div className="movie-list__search block">
          <h4 className="movie-list__search_title title">Поиск по названию:</h4>

          <div className="movie-list__search_settings">
            <form className="movie-list__search__form" onSubmit={handleSubmit}>
              <input
                className="movie-list__search_input"
                name="searchName"
                type="text"
                placeholder="Название фильма"
                onChange={handleChange}
                value={searchName}
              />
            </form>
          </div>
        </div>

        {spinner}
        {error}
        {content}
      </div>
    </ErrorBoundary>
  );
};

export default MovieListPage;
