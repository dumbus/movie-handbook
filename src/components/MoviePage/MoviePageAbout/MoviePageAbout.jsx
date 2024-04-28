import React from 'react';

import './MoviePageAbout.scss';

const MoviePageAbout = ({ movieData }) => {
  const renderAboutList = (movieData) => {
    const {
      year,
      countries,
      genres,
      slogan,
      directors,
      producers,
      composers,
      budget,
      fees,
      ageRating,
      movieLength
    } = movieData;

    const itemsData = [
      { category: 'Год производства', value: year },
      { category: 'Страна', value: countries },
      { category: 'Жанр(ы)', value: genres },
      { category: 'Слоган', value: slogan },
      { category: 'Режиссёр(ы)', value: directors },
      { category: 'Продюсер(ы)', value: producers },
      { category: 'Композитор(ы)', value: composers },
      { category: 'Бюджет', value: budget },
      { category: 'Кассовые сборы', value: fees },
      { category: 'Возраст', value: ageRating },
      { category: 'Длительность', value: movieLength }
    ];

    const aboutListItems = itemsData.map((itemData, i) => {
      const { category, value } = itemData;

      return (
        <li className="movie-page__about_wrapper" key={i}>
          <div className="movie-page__about_category">{category}</div>
          <div className="movie-page__about_value">{value}</div>
        </li>
      );
    });

    return <ul>{aboutListItems}</ul>;
  };

  const aboutList = renderAboutList(movieData);

  return (
    <div className="movie-page__about block">
      <h3 className="movie-page__about_title title">О фильме</h3>

      {aboutList}
    </div>
  );
};

export default MoviePageAbout;
