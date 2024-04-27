import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieListPage from './components/MovieListPage/MovieListPage';
import MoviePage from './components/MoviePage/MoviePage';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route exact path='/' element={<MovieListPage />} />
          <Route exact path='/movies/:baseId' element={<MoviePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
