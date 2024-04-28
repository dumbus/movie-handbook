import { Link } from 'react-router-dom';

import './MoviePageSimilar.scss';

import basePoster from '../../../assets/poster.webp';

const MoviePageSimilar = ({ movieData }) => {
  const { similarMovies } = movieData;

  if (!similarMovies) {
    return null;
  }

  const renderSimilarList = (similarMovies) => {
    const similarListItems = similarMovies.map((similarMovie) => {
      const {
        id,
        name,
        rating,
        year,
        posterUrl
      } = similarMovie;

      return (
        <Link 
          to={`/movies/${id}`} 
          className='movie-page__similar_item' 
          key={id} 
        >
          <img className='movie-page__similar_poster' src={posterUrl || basePoster} alt={name} />

          <div className='movie-page__similar_description'>
            <div className='movie-page__similar_rating'>{rating}</div>
            <div className='movie-page__similar_name'>{`${name} ${year ? `(${year})` : ''}`}</div>
          </div>  
        </Link>
      )
    });

    return (
      <ul className='movie-page__similar_list'>
        {similarListItems}
      </ul>
    )
  };

  const similarList = renderSimilarList(similarMovies);

  return (
    <div className='movie-page__similar block'>
      <h3 className='movie-page__similar_title title'>Похожие</h3>

      {similarList}
    </div>
  )
};

export default MoviePageSimilar;
