import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import MoviePage from './components/MoviePage/MoviePage';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const movieListElement = (
  <ErrorBoundary>
    <MovieList />
  </ErrorBoundary>
);

const moviePageElement = (
  <ErrorBoundary >
    <MoviePage />
  </ErrorBoundary>
)

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={movieListElement} />
          <Route exact path='/movies/:baseId' element={moviePageElement} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
