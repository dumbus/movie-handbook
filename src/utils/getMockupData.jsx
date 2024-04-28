export const getMockupMoviesList = () => {
  const moviesData = [];

  for (let i = 0; i < 12; i++) {
    const id = Math.random() * 1000;

    const movieData = {
      id: id,
      name: `name${id}`,
      year: `year${id}`,
      description: `description${id}`,
      posterUrl: null,
      countries: `countries${id}`,
      rating: 8.8
    }

    moviesData.push(movieData);
  }

  return moviesData;
}

export const getMockupMovie = () => {
  const similarMoviesData = [];

  for (let i = 0; i < 5; i++) {
    const id = Math.random() * 1000;

    const similarMovie = {
      id: id,
      name: id + 'name',
      rating: 8.8,
      year: 'similarYear',
      posterUrl: null
    }

    similarMoviesData.push(similarMovie);
  }

  const id = Math.random() * 1000;

  const movieData = {
    id: id,
    name: `${id} name`,
    alternativeName: 'alternative name',
    year: 99999,
    shortDescription: 'shortDescription',
    posterUrl: null,
    countries: 'countries',
    rating: 8.8,
    slogan: 'slogan',
    budget: 'budget',
    fees: 'fees',
    movieLength: 'movieLength',
    ageRating: '18+',
    genres: 'genres',
    directors: 'director',
    producers: 'producer',
    composers: 'composer',
    similarMovies: similarMoviesData
  }

  return movieData;
};
