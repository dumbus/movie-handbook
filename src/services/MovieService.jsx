class MovieService {  
  _apiBaseUrl = 'https://api.kinopoisk.dev/v1.4/';
  // _apiKey = 'MP5T443-ZJD42TS-N2AJV65-DXPK135';
  // _apiKey = 'HG1DEST-BT748Z3-QHR2SN7-HKGPA9B';
  // _apiKey = 'S88RBF0-CGFM9AT-PP6890E-VCQA8HT';
  _apiKey = '6N51YFF-22XM09R-PWXCGXS-P8PE2G6';
  _fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json', 
      'X-API-KEY': this._apiKey
    }
  };

  getResource = async (url) => {
    const response = await fetch(url, this._fetchOptions);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  getMovies = async (page = 1, limit = 12) => {
    const result = await this.getResource(`${this._apiBaseUrl}movie?page=${page}&limit=${limit}`);

    return result.docs.map(item => this._transformMovie(item));
  }

  getMovieById = async (id) => {
    const result = await this.getResource(`${this._apiBaseUrl}movie/${id}`);

    return this._transformMovieFull(result);
  }

  _getName(movie) {
    if (movie.name) {
      return movie.name;
    } else if (movie.alternativeName) {
      return movie.alternativeName;
    } else if (movie.names && movie.names[0]) {
      return movie.names[0];
    }

    return 'Название неизвестно';
  }

  _getBudget(movie) {
    if (movie.budget.value && movie.budget.currency) {
      return `${movie.budget.currency}${movie.budget.value}`;
    }

    return '-';
  }

  _getFees(movie) {
    if (!movie.fees || !movie.fees.world) {
      return '-';
    }

    if (movie.fees.world.value && movie.fees.world.currency) {
      return `${movie.fees.world.currency}${movie.fees.world.value}`;
    }

    return '-';
  }

  _getPersons(movie, profession) {
    const result = movie.persons.filter((person) => {
      if (
        person.enProfession && 
        person.enProfession === profession &&
        person.name
      ) {
        return true;
      }

      return false;
    }).map((person) => {
      return person.name;
    }).join(', ');

    return result || '-';
  }

  _getSimilarMovies(movie) {
    const result = movie.similarMovies.slice(0, 4).map((similarMovie) => {
      return {
        id: similarMovie.id,
        name: this._getName(similarMovie),
        rating: (similarMovie.rating && similarMovie.rating.kp) ? similarMovie.rating.kp.toFixed(1) : 0,
        year: similarMovie.year || null,
        posterUrl: similarMovie.poster.url || null
      };
    });

    return result;
  }

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      name: this._getName(movie),
      year: movie.year || null,
      posterUrl: movie.poster.url || null,
      countries: movie.countries.map((obj) => obj.name).join(', '),
      rating: (movie.rating && movie.rating.kp) ? movie.rating.kp.toFixed(1) : 0
    }
  }

  _transformMovieFull = (movie) => {

    return {
      id: movie.id,
      name: this._getName(movie),
      alternativeName: movie.alternativeName || null,
      year: movie.year || null,
      shortDescription: movie.shortDescription || null,
      posterUrl: movie.poster.url || null,
      countries: movie.countries.map((obj) => obj.name).join(', '),
      rating: (movie.rating && movie.rating.kp) ? movie.rating.kp.toFixed(1) : 0,
      slogan: movie.slogan || '-',
      budget: this._getBudget(movie),
      fees: this._getFees(movie),
      movieLength: movie.movieLength || '-',
      ageRating: `${movie.ageRating}+` || '-',
      genres: movie.genres.map((obj) => obj.name).join(', '),
      directors: this._getPersons(movie, 'director'),
      producers: this._getPersons(movie, 'producer'),
      composers: this._getPersons(movie, 'composer'),
      similarMovies: movie.similarMovies ? this._getSimilarMovies(movie) : null
    }
  }
}

export default MovieService;