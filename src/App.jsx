import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App;
