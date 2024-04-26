import React from 'react';

import './MoviePage.scss';

import poster from '../../assets/poster.webp';

const MoviePage = () => {
  const rating = 8.8;

  const renderStarsList = (movieRating) => {
    const starsList = [];

    const numberOfFullStars = Math.floor(Number(movieRating));
    const lastStarFilling = Number(movieRating) % 1 * 100;

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

      const starsListItem = (
        <li className='movie-page__rating_item'>
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

      starsList.push(starsListItem);
    }

    return starsList;
  };

  const starsList = renderStarsList(rating);

  return (
    <div className='movie-page container'>
      <div className='movie-page__grid'>
        <div className='movie-page__grid_main'>
          <div className='movie-page__header block'>
            <h2 className='movie-page__title title'>1+1 (2011)</h2>
            <h3 className='movie-page__subtitle title'>Intouchables</h3>
            <div className='movie-page__short-description'>
              Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си
            </div>
          </div>

          <div className='movie-page__about block'>
            <h3 className='movie-page__about_ title'>О фильме</h3>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Год производства</div>
              <div className='movie-page__about_value'>2011</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Страна</div>
              <div className='movie-page__about_value'>Франция</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Жанр</div>
              <div className='movie-page__about_value'>драма, комедия драма, комедия драма, комедия драма, комедия драма, комедия драма, комедия</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Слоган</div>
              <div className='movie-page__about_value'>«Sometimes you have to reach into someone else's world to find out what's missing in your own»</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Режиссёр</div>
              <div className='movie-page__about_value'>Оливье Накаш, Эрик Толедано</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Продюсер</div>
              <div className='movie-page__about_value'>Арно Бертран, Доминик Бутонна</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Композитор</div>
              <div className='movie-page__about_value'>Людовико Эйнауди</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Бюджет</div>
              <div className='movie-page__about_value'>€9 500 000</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Кассовые сборы</div>
              <div className='movie-page__about_value'>$426 588 510</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Возраст</div>
              <div className='movie-page__about_value'>18+</div>
            </div>

            <div className='movie-page__about_wrapper'>
              <div className='movie-page__about_category'>Длительность</div>
              <div className='movie-page__about_value'>112 мин.</div>
            </div>
          </div>
        </div>

        <div className='movie-page__grid_secondary'>
          <div className='movie-page__poster-wrapper block'>
            <img className='movie-page__poster' src={poster} alt='poster' />
          </div>

          <div className='movie-page__rating block'>
            <h3 className='movie-page__rating_title title'>Рейтинг фильма</h3>

            <ul className='movie-page__rating_list'>
              {starsList}
            </ul>
            <div className='movie-page__rating_reviews'>2 054 735 оценок</div>
          </div>
        </div>
      </div>

      <div className='movie-page__similar block'>
        <h3 className='movie-page__similar_title title'>Похожие</h3>

        <ul className='movie-page__similar_list'>
          <li className='movie-page__similar_item'>
            <img className='movie-page__similar_poster' src={poster} alt='poster image' />

            <div className='movie-page__similar_description'>
              <div className='movie-page__similar_rating'>8.8</div>
              <div className='movie-page__similar_name'>1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 </div>
              <div className='movie-page__similar_country'>2011, драма, комедия 2011, драма, комедия 2011, драма, комедия</div>
            </div>  
          </li>

          <li className='movie-page__similar_item'>
            <img className='movie-page__similar_poster' src={poster} alt='poster image' />


            <div className='movie-page__similar_description'>
              <div className='movie-page__similar_rating'>8.8</div>
              <div className='movie-page__similar_name'>1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 </div>
              <div className='movie-page__similar_country'>2011, драма, комедия 2011, драма, комедия 2011, драма, комедия</div>
            </div>  
          </li>

          <li className='movie-page__similar_item'>
          <img className='movie-page__similar_poster' src={poster} alt='poster image' />


            <div className='movie-page__similar_description'>
              <div className='movie-page__similar_rating'>8.8</div>
              <div className='movie-page__similar_name'>1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 </div>
              <div className='movie-page__similar_country'>2011, драма, комедия 2011, драма, комедия 2011, драма, комедия</div>
            </div>  
          </li>

          <li className='movie-page__similar_item'>
            <img className='movie-page__similar_poster' src={poster} alt='poster image' />


            <div className='movie-page__similar_description'>
              <div className='movie-page__similar_rating'>8.8</div>
              <div className='movie-page__similar_name'>1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 </div>
              <div className='movie-page__similar_country'>2011, драма, комедия 2011, драма, комедия 2011, драма, комедия</div>
            </div>  
          </li>

          <li className='movie-page__similar_item'>
            <img className='movie-page__similar_poster' src={poster} alt='poster image' />


            <div className='movie-page__similar_description'>
              <div className='movie-page__similar_rating'>8.8</div>
              <div className='movie-page__similar_name'>1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 1+1 </div>
              <div className='movie-page__similar_country'>2011, драма, комедия 2011, драма, комедия 2011, драма, комедия</div>
            </div>  
          </li>
        </ul>
      </div>
    </div>
  )
};

export default MoviePage;
