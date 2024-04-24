import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/_global.scss';

import MovieService from './services/MovieService';

import App from './App';

const movieService = new MovieService();

movieService.getMovies().then(res => console.log(res));
movieService.getMovieById(1201206).then(res => console.log(res));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
