import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import MovieListPage from './components/MovieListPage/MovieListPage';
import MoviePage from './components/MoviePage/MoviePage';
import RandomPage from './components/RandomPage/RandomPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            exact
            path="/movies/:listType/:page"
            element={<MovieListPage />}
          />
          <Route exact path="/movie/:baseId" element={<MoviePage />} />
          <Route exact path="/random" element={<RandomPage />} />
          <Route exact path="/movies-handbook" element={<MainPage />} />
          <Route exact path="/movies" element={<MainPage />} />
          <Route exact path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
