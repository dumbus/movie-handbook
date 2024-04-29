import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GlobalStateProvider } from './context/GlobalStateContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieListPage from './components/MovieListPage/MovieListPage';
import MoviePage from './components/MoviePage/MoviePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route exact path="/movies" element={<MovieListPage />} />
            <Route exact path="/movies/:baseId" element={<MoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GlobalStateProvider>
  );
};

export default App;
