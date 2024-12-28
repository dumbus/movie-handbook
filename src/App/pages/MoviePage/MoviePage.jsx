import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './MoviePage.scss';

import ErrorBoundary from '~/components/ErrorBoundary';
import ErrorMessage from '~/components/ErrorMessage';
import Spinner from '~/components/Spinner';

import MovieService from '~/services/MovieService';

import MoviePageAbout from './components/MoviePageAbout';
import MoviePageHeader from './components/MoviePageHeader';
import MoviePagePoster from './components/MoviePagePoster';
import MoviePageRating from './components/MoviePageRating';
import MoviePageSimilar from './components/MoviePageSimilar';

const MoviePage = ({ preparedData }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const { baseId } = useParams();

  const [movieData, setMovieData] = useState(preparedData || {});

  const movieService = new MovieService();

  useEffect(() => {
    const hasData = Object.keys(movieData).length;

    if (!hasData) {
      setLoading(true);

      window.scrollTo(0, 0);
      onRequest(baseId);
    }
  }, [baseId]);

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
          <MoviePageSimilar movieData={movieData} />
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
