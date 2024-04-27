import { useState, useEffect } from 'react';

import './MoviePage.scss';

import MovieService from '../../services/MovieService';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import MoviePageHeader from '../MoviePageHeader/MoviePageHeader';
import MoviePageAbout from '../MoviePageAbout/MoviePageAbout';
import MoviePagePoster from '../MoviePagePoster/MoviePagePoster';
import MoviePageRating from '../MoviePageRating/MoviePageRating';
import MoviePageSimilar from '../MoviePageSimilar/MoviePageSimilar';

const MoviePage = ({ id }) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const movieService = new MovieService();

  useEffect(() => {
    onRequest(id);
  }, []);

  const onRequest = (id) => {
    movieService.getMovieById(id)
      .then(onMovieDataLoaded)
      .catch(onError);
  };

  const onMovieDataLoaded = (movieData) => {
    setMovieData(movieData);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const renderContent = (movieData) => {
    return (
      <div className='movie-page__grid'>
        <div className='movie-page__grid_short'>
          <MoviePageHeader movieData={movieData} />
          <MoviePageAbout movieData={movieData} />
        </div>

        <div className='movie-page__grid_short'>
          <MoviePagePoster movieData={movieData} />
          <MoviePageRating movieData={movieData} />
        </div>

        <div className='movie-page__grid_long'>
          <MoviePageSimilar movieData={movieData} />
        </div>
      </div>
    )
  }

  const content = renderContent(movieData);

  const error = hasError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const page = !(isLoading || hasError) ? content : null;

  return (
    <div className='movie-page container'>
      {spinner}
      {error}
      {page}
    </div>
  )
};

export default MoviePage;
