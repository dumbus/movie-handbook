class MovieService {  
  _apiBaseUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2';
  _apiKey = '20337fa4-01b5-45a8-9c3c-dc4e8a0c468d';
  _fetchOptions = {
    method: 'GET',
    headers: {
      'X-API-KEY': this._apiKey,
      'Content-Type': 'application/json',
    }
  };

  getResource = async (url) => {
    const response = await fetch(url, this._fetchOptions);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  getMovies = () => {
    return this.getResource(`${this._apiBaseUrl}/films`);
  }

  getMovieById = (id) => {
    return this.getResource(`${this._apiBaseUrl}/films/${id}`);
  }

  // ================== For TMDB API ==================

  // _apiBaseUrl_tmdb = 'https://api.themoviedb.org/3/';
  // _apiKey_tmdb = 'apikey=e308b43b43941a8583bbe40d48492832';

  // getResource_tmdb = async (url) => {
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  //   }

  //   return await response.json();
  // }

  // getMovies_tmdb = () => {
  //   return this.getResource(`${this._tmdbBaseUrl}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&${this._apiKey_tmdb}`);
  // }
}

export default MovieService;