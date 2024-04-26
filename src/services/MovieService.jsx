class MovieService {  
  _apiBaseUrl = 'https://api.kinopoisk.dev/v1.4/';
  _apiKey = 'MP5T443-ZJD42TS-N2AJV65-DXPK135';
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

  // getMovieById = async (id) => {
  //   const result = await this.getResource(`${this._apiBaseUrl}/movie/${id}`);

  //   return this._transformMovieFull(result);
  // }

  _getName(movie) {
    if (movie.name && movie.name.length > 0) {
      return movie.name;
    } else if (movie.alternativeName && movie.alternativeName.length > 0) {
      return movie.alternativeName;
    } else if (movie.names && movie.names[0] && movie.names[0] > 0) {
      return movie.names[0];
    }

    return 'Название неизвестно';
  }

  _getRating(rating) {
    const ratingStr = String(rating);

    // String(rating).length > 2 ? ratingStr.slice(0, 2) : rating;

    if (ratingStr.length > 2) {
      return ratingStr.slice(0, 2);
    } else {
      return ratingStr;
    }
  }

  _transformMovie = (movie) => {
    return {
      id: movie.id,
      name: this._getName(movie),
      year: movie.year || null,
      description: movie.description || 'Описание отсутствует',
      posterUrl: movie.poster.url || './assets/poster.webp',
      countries: movie.countries.map((obj) => obj.name).join(', '),
      rating: movie.rating.kp.toFixed(1) || 0
    }
  }

  // _transformMovieFull = (movieFull) => {
  //   return {
  //     kinopoiskId: movieFull.kinopoiskId,
  //     name: this._getName(movieFull),
  //     description: movieFull.shortDescription || 'NO DESCRIPTION',
  //     coverUrl: movieFull.coverUrl || './assets/404-cover.jpg',
  //     filmLength: movieFull.filmLength,
  //     year: movieFull.year,
  //     genres: movieFull.genres,
  //     countries: movieFull.countries,
  //     ratingImdb: movieFull.ratingImdb
  //   }
  // }
}

export default MovieService;