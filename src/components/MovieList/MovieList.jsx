import React from 'react';

import './MovieList.scss';

import poster from '../../assets/404-poster.webp';

const MovieList = () => {
  return (
    <>
      <div className='movie-list container'>
        <h2 className='movie-list__title'>Список фильмов</h2>

        <ul className='movie-list__list'>
          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители wregerwg wrgewgr (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>7.9</div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>

          <li className='movie-list__item'>
            <img className='movie-list__item_image' src={poster} alt='cover image' />

            <div className='movie-list__item_text'>
              <div className='movie-list__item_imdb'>
                <div className='movie-list__item_imdb'>7.9</div>
              </div>

              <div className='movie-list__item_description'>
                <div className='movie-list__item_name'>Мстители (2012)</div>
                <div className='movie-list__item_country'>США, Австралия</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MovieList;
