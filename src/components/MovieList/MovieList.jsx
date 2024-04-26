import { useState, useEffect } from 'react';

import './MovieList.scss';

import MovieService from '../../services/MovieService';

import Paginator from '../Paginator/Paginator';
import Error from '../Error/Error';
import Spinner from '../Spinner/Spinner';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [page, setPage] = useState(1);

  const movieService = new MovieService();

  useEffect(() => {
    onRequest(page);
  }, []);

  const onRequest = (page) => {
    movieService.getMovies(page)
      .then(onMoviesListLoaded)
      .catch(onError);
  };

  const onMoviesListLoaded = (movieList) => {
    setMovieList(movieList);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const renderMovieList = (itemsData) => {
    const listItems = itemsData.map((itemData) => {
      const { 
        kinopoiskId,
        name,
        year,
        posterUrl,
        countries,
        rating 
      } = itemData;

      return (
        <li className='movie-list__item' key={kinopoiskId}>
          <img className='movie-list__item_image' src={posterUrl} alt='poster image' />

          <div className='movie-list__item_text'>
            <div className='movie-list__item_rating'>{rating}</div>

            <div className='movie-list__item_description'>
              <div className='movie-list__item_name'>{`${name} (${year})`}</div>
              <div className='movie-list__item_country'>{countries}</div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <ul className='movie-list__list'>
        {listItems}
      </ul>
    );
  };

  const switchPage = (offset) => {
    setError(false);
    setLoading(true);
    
    onRequest(page + offset);
    setPage((page) => page + offset);
  };

  const list = renderMovieList(movieList);

  const error = hasError ? <Error /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? list : null;

  return (
    <div className='movie-list container'>
      <h2 className='movie-list__title title'>Лучшие фильмы</h2>

      <Paginator 
        page={page}
        isLoading={isLoading}
        switchPage={switchPage}
      />

      {spinner}
      {error}
      {content}
    </div>
  )
}

export default MovieList;
