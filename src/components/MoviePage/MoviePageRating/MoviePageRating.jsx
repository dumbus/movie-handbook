import './MoviePageRating.scss';

const MoviePageRating = ({ movieData }) => {
  const renderRatingList = (movieData) => {
    const { rating } = movieData;

    const ratingListItems = [];

    const numberOfFullStars = Math.floor(Number(rating));
    const lastStarFilling = Number(rating) % 1 * 100;

    for (let i = 1; i <= 10; i++) {
      const currentStarFilling = () => {
        if (i <= numberOfFullStars) {
          return '100%';
        } else if (i === numberOfFullStars + 1) {
          return `${lastStarFilling}%`;
        } else {
          return '0';
        }
      };

      const ratingListItem = (
        <li className='movie-page__rating_item' key={i} >
          <span className='movie-page__rating_stars'>
            <span className='movie-page__rating_star empty' />
            <span 
              className='movie-page__rating_star filled'
              style={{width: currentStarFilling()}}
            />
          </span>
          <span className='movie-page__rating_number'>{i}</span>
        </li>
      );

      ratingListItems.push(ratingListItem);
    }

    return (
      <ul className='movie-page__rating_list'>
        {ratingListItems}
      </ul>
    )
  };

  const ratingList = renderRatingList(movieData);

  return (
    <div className='movie-page__rating block'>
      <h3 className='movie-page__rating_title title'>Рейтинг фильма</h3>

      {ratingList}
      <div className='movie-page__rating_reviews'>2 054 735 оценок</div>
    </div>
  )
};

export default MoviePageRating;
