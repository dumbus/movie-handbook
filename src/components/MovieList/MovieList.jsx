import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MovieList.scss';

import MovieService from '../../services/MovieService';

import Paginator from '../Paginator/Paginator';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Spinner from '../Spinner/Spinner';

import { getMockupMoviesList } from '../../utils/getMockupData';

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
    // =========== for local testing ===========
    const mockupMoviesList = getMockupMoviesList();
    onMoviesListLoaded(mockupMoviesList);
    // =========================================

    // movieService.getMovies(page)
    //   .then(onMoviesListLoaded)
    //   .catch(onError);
  };

  const onMoviesListLoaded = (movieList) => {
    setMovieList(movieList);
    setLoading(false);
  };

  const onError = (error) => {
    setError(true);
    setLoading(false);
  };

  const renderMovieList = (itemsData) => {
    const listItems = itemsData.map((itemData) => {
      const { 
        id,
        name,
        year,
        posterUrl,
        countries,
        rating 
      } = itemData;

      return (
        <Link to={`/movies/${id}`} key={id}>
          <li className='movie-list__item' key={id}>
            <img className='movie-list__item_image' src={posterUrl} alt={name} />
            <div className='movie-list__item_rating'>{rating}</div>

            <div className='movie-list__item_description'>
              <div className='movie-list__item_name'>{`${name} (${year})`}</div>
              <div className='movie-list__item_country'>{countries}</div>
            </div>
          </li>
        </Link>
      );
    });

    return (
      <ul className='movie-list__list'>
        {listItems}
      </ul>
    );
  };

  const switchPage = (offset) => {
    setLoading(true);
    
    onRequest(page + offset);
    setPage((page) => page + offset);
  };

  const list = renderMovieList(movieList);

  const error = hasError ? <ErrorMessage /> : null;
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
