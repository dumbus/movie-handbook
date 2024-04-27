import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import MoviePage from './components/MoviePage/MoviePage';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      {/* <MovieList /> */}
      <MoviePage id={251733} />
      <Footer />
    </div>
  )
}

export default App;
