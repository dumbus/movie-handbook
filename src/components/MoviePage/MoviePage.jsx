import { useState, useEffect } from 'react';

import './MoviePage.scss';

import poster from '../../assets/poster.webp';

import MovieService from '../../services/MovieService';

import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';

import MoviePageHeader from '../MoviePageHeader/MoviePageHeader';
import MoviePageAbout from '../MoviePageAbout/MoviePageAbout';
import MoviePagePoster from '../MoviePagePoster/MoviePagePoster';
import MoviePageRating from '../MoviePageRating/MoviePageRating';
import MoviePageSimilar from '../MoviePageSimilar/MoviePageSimilar';

const mockup_data = {
  id: 'id',
  name: 'name',
  alternativeName: 'alternative name',
  year: 99999,
  shortDescription: 'shortDescription',
  posterUrl: '../../assets/poster.webp',
  countries: 'countries',
  rating: 8.8,
  slogan: 'slogan',
  budget: 'budget',
  fees: 'fees',
  movieLength: 'movieLength',
  ageRating: '18+',
  genres: 'genres',
  directors: 'director',
  producers: 'producer',
  composers: 'composer'
};

const MoviePage = ({ id }) => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const movieService = new MovieService();

  useEffect(() => {
    onRequest(id);
  }, []);

  const onRequest = (id) => {
    // onMovieDataLoaded(mockup_data);
    movieService.getMovieById(id)
      .then(onMovieDataLoaded)
      .catch(onError);
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

  return (
    <div className='movie-page container'>
      {/* <Spinner /> */}
      {/* <Error /> */}
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
    </div>
  )
};

export default MoviePage;
