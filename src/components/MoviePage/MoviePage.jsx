import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import './MoviePage.scss';

import MovieService from '../../services/MovieService';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Spinner from '../Spinner/Spinner';

import MoviePageHeader from './MoviePageHeader/MoviePageHeader';
import MoviePageAbout from './MoviePageAbout/MoviePageAbout';
import MoviePagePoster from './MoviePagePoster/MoviePagePoster';
import MoviePageRating from './MoviePageRating/MoviePageRating';
import MoviePageSimilar from './MoviePageSimilar/MoviePageSimilar';

import { getMockupMovie } from '../../utils/getMockupData';

const MoviePage = () => {
  const { baseId } = useParams();

  const [id, setId] = useState(baseId);
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const location = useLocation();

  // eslint-disable-next-line
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
    // =========== for local testing ===========
    setTimeout(() => {
      const mockupMovieData = getMockupMovie(id);
      onMovieDataLoaded(mockupMovieData);
    }, 1000);
    // =========================================

    // movieService.getMovieById(id)
    //   .then(onMovieDataLoaded)
    //   .catch(onError);
  };

  const onMovieDataLoaded = (movieData) => {
    setMovieData(movieData);
    setLoading(false);
  };

  // eslint-disable-next-line
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
