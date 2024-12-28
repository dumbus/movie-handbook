import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './MovieListPage.scss';

import ErrorBoundary from '~/components/ErrorBoundary';
import ErrorMessage from '~/components/ErrorMessage';
import Spinner from '~/components/Spinner';

import MovieService from '~/services/MovieService';
import { getSearchQuery } from '~/utils/getSearchQuery';

import MovieList from './components/MovieList';
import MovieListTitle from './components/MovieListTitle';

const MovieListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [pages, setPages] = useState(null);
  const { listType, page } = useParams();
  const navigate = useNavigate();

  const movieService = new MovieService();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    onRequest(listType);
  }, [listType, page]);

  const onRequest = (type) => {
    if (type === 'popular' || type === 'best' || type === 'newest') {
      movieService
        .getMovies(page, type)
        .then(onMoviesListLoaded)
        .catch(onError);
    } else if (type.startsWith('search=')) {
      const searchQuery = getSearchQuery(type);

      movieService
        .getMoviesByName(searchQuery, page)
        .then(onMoviesListLoaded)
        .catch(onError);
    } else {
      navigate('/404');
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

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? (
    <MovieList
      movieList={movieList}
      page={page}
      pages={pages}
      listType={listType}
    />
  ) : null;

  return (
    <ErrorBoundary>
      <div className="movie-list container">
        <MovieListTitle page={page} listType={listType} />

        {error}
        {spinner}
        {content}
      </div>
    </ErrorBoundary>
  );
};

export default MovieListPage;
