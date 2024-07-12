import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './RandomPage.scss';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Dice from '../Dice/Dice';

import MovieService from '../../services/MovieService';

const RandomPage = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [movieId, setMovieId] = useState(null);
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();

  const movieService = new MovieService();

  useEffect(() => {
    onRequest();

    const rollDice = () => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    };

    const intervalId = setInterval(rollDice, 500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (movieId) {
      navigate(`/movie/${movieId}`);
    }
  }, [movieId]);

  const onRequest = () => {
    movieService.getRandomMovieId().then(onIdLoaded).catch(onError);
  };

  const onIdLoaded = (id) => {
    setMovieId(id);
  };

  const onError = (error) => {
    console.log(error);

    setError(true);
  };

  return (
    <ErrorBoundary>
      <div className="random-page container">
        {hasError ? (
          <ErrorMessage />
        ) : (
          <>
            <h2 className="random-page__title title">
              Ищем интересный фильм специально для Вас...
            </h2>
            <Dice value={diceValue} />
          </>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default RandomPage;
