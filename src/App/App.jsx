import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './pages/Footer';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import MovieListPage from './pages/MovieListPage';
import MoviePage from './pages/MoviePage';
import NotFoundPage from './pages/NotFoundPage';
import RandomPage from './pages/RandomPage';

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
