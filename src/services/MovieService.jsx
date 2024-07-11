class MovieService {
  _apiBaseUrl = 'https://api.kinopoisk.dev/v1.4/';
  // _apiKey = 'MP5T443-ZJD42TS-N2AJV65-DXPK135';
  _apiKey = 'AFN4TNJ-0V8MG0X-NSE5PMR-TWG4PNY';
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
  };

  getMovies = async (page = 1, listType = 'popular') => {
    let sortField = 'popular';

    switch (listType) {
      case 'popular':
        sortField = 'votes.kp';
        break;
      case 'best':
        sortField = 'rating.kp';
        break;
      case 'newest':
        sortField = 'year';
        break;
    }

    const raw = await this.getResource(
      `${this._apiBaseUrl}movie?page=${page}&limit=12&sortField=${sortField}&sortType=-1&type=movie`
    );

    return {
      pages: raw.pages,
      movieList: raw.docs.map((item) => this._transformMovie(item))
    };
  };

  getMovieById = async (id) => {
    const raw = await this.getResource(`${this._apiBaseUrl}movie/${id}`);

    return this._transformMovieFull(raw);
  };

  getRandomMovieId = async () => {
    const raw = await this.getResource(
      `${this._apiBaseUrl}movie/random?notNullFields=id&type=movie`
    );

    return raw.id;
  };

  getMoviesByName = async (name, page = 1) => {
    const raw = await this.getResource(
      `${this._apiBaseUrl}movie/search?page=${page}&limit=12&query=${name}`
    );

    return {
      total: raw.total,
      pages: raw.pages,
      movieList: raw.docs.map((item) => this._transformMovie(item))
    };
  };

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
    if (movie.budget && movie.budget.value && movie.budget.currency) {
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
    if (!movie.persons) {
      return '-';
    }

    const result = movie.persons
      .filter((person) => {
        if (
          person.enProfession &&
          person.enProfession === profession &&
          person.name
        ) {
          return true;
        }

        return false;
      })
      .map((person) => {
        return person.name;
      })
      .join(', ');

    return result || '-';
  }

  _getSimilarMovies(movie) {
    const result = movie.similarMovies.slice(0, 4).map((similarMovie) => {
      return {
        id: similarMovie.id,
        name: this._getName(similarMovie),
        rating:
          similarMovie.rating && similarMovie.rating.kp
            ? similarMovie.rating.kp.toFixed(1)
            : 0,
        year: similarMovie.year || 'год неизестен',
        posterUrl: similarMovie.poster ? similarMovie.poster.url : null
      };
    });

    return result;
  }

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      name: this._getName(movie),
      year: movie.year || 'год неизестен',
      posterUrl: movie.poster ? movie.poster.url : null,
      countries: movie.countries
        ? movie.countries.map((obj) => obj.name).join(', ')
        : 'страна неизвестна',
      rating: movie.rating && movie.rating.kp ? movie.rating.kp.toFixed(1) : 0
    };
  };

  _transformMovieFull = (movie) => {
    return {
      id: movie.id,
      name: this._getName(movie),
      alternativeName: movie.alternativeName || null,
      year: movie.year || 'год неизестен',
      shortDescription: movie.shortDescription || null,
      posterUrl: movie.poster ? movie.poster.url : null,
      countries: movie.countries
        ? movie.countries.map((obj) => obj.name).join(', ')
        : 'страна неизвестна',
      rating: movie.rating && movie.rating.kp ? movie.rating.kp.toFixed(1) : 0,
      votes: movie.votes && movie.votes.kp ? movie.votes.kp : 0,
      slogan: movie.slogan || '-',
      budget: this._getBudget(movie),
      fees: this._getFees(movie),
      movieLength: movie.movieLength ? `${movie.movieLength} мин.` : '-',
      ageRating: movie.ageRating ? `${movie.ageRating}+` : '-',
      genres: movie.genres
        ? movie.genres.map((obj) => obj.name).join(', ')
        : '-',
      directors: this._getPersons(movie, 'director'),
      producers: this._getPersons(movie, 'producer'),
      composers: this._getPersons(movie, 'composer'),
      similarMovies:
        movie.similarMovies && movie.similarMovies.length
          ? this._getSimilarMovies(movie)
          : null
    };
  };
}

export default MovieService;
