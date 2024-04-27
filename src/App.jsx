import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import MoviePage from './components/MoviePage/MoviePage';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
        <ErrorBoundary>
          <MovieList />
        </ErrorBoundary>
        {/* <ErrorBoundary >
          <MoviePage id={251733} />
        </ErrorBoundary> */}
      <Footer />
    </div>
  )
}

export default App;
