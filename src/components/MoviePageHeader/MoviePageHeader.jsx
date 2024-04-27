import './MoviePageHeader.scss';

const MoviePageHeader = ({ movieData }) => {
  const {
    name,
    year,
    alternativeName,
    shortDescription
  } = movieData;

  return (
    <div className='movie-page__header block'>
      <h2 className='movie-page__header_title title'>{`${name} (${year})`}</h2>
      <h3 className='movie-page__header_subtitle title'>{alternativeName}</h3>
      <div className='movie-page__header_short-description'>{shortDescription}</div>
    </div>
  );
};

export default MoviePageHeader;
