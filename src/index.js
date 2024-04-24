import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/_global.scss';

import MovieService from './services/MovieService';

import App from './App';

const movieService = new MovieService();

movieService.getMovies().then(result => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
