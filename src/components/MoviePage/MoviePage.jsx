import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import './MoviePage.scss';

import { useGlobalState } from '../../context/GlobalStateContext';

import MovieService from '../../services/MovieService';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

import MoviePageHeader from './MoviePageHeader/MoviePageHeader';
import MoviePageAbout from './MoviePageAbout/MoviePageAbout';
import MoviePagePoster from './MoviePagePoster/MoviePagePoster';
import MoviePageRating from './MoviePageRating/MoviePageRating';
import MoviePageSimilar from './MoviePageSimilar/MoviePageSimilar';

const MoviePage = () => {
  const { isLoading, setLoading, hasError, setError } = useGlobalState();
  const { baseId } = useParams();

  const [id, setId] = useState(baseId);
  const [movieData, setMovieData] = useState([]);
  // const [hasError, setError] = useState(false);
  const location = useLocation();

  const movieService = new MovieService();

  useEffect(() => {
    setLoading(true);

    window.scrollTo(0, 0);
    onRequest(id);
  }, [id]);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const movieId = parseInt(pathParts[pathParts.length - 1]);

    setId(movieId);
  }, [location.pathname]);

  const onRequest = (id) => {
    movieService.getMovieById(id).then(onMovieDataLoaded).catch(onError);
  };

  const onMovieDataLoaded = (movieData) => {
    setMovieData(movieData);
    setLoading(false);
  };

  const onError = (error) => {
    console.log(error);

    setError(true);
    setLoading(false);
  };

  const renderContent = (movieData) => {
    return (
      <div className="movie-page__grid">
        <div className="movie-page__grid_short left">
          <MoviePageHeader movieData={movieData} />
          <MoviePageAbout movieData={movieData} />
        </div>

        <div className="movie-page__grid_short right">
          <MoviePagePoster movieData={movieData} />
          <MoviePageRating movieData={movieData} />
        </div>

        <div className="movie-page__grid_long">
          <MoviePageSimilar movieData={movieData} id={id} setId={setId} />
        </div>
      </div>
    );
  };

  const content = renderContent(movieData);

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const page = !(isLoading || hasError) ? content : null;

  return (
    <ErrorBoundary>
      <div className="movie-page container">
        {spinner}
        {error}
        {page}
      </div>
    </ErrorBoundary>
  );
};

export default MoviePage;
