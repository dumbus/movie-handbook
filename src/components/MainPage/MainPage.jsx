import React from 'react';

import './MainPage.scss';

import main from '../../assets/icons/main/main.svg';
import popular from '../../assets/icons/main/popular.svg';
import best from '../../assets/icons/main/best.svg';
import newest from '../../assets/icons/main/newest.svg';
import random from '../../assets/icons/main/random.svg';
import search from '../../assets/icons/main/search.svg';

const MainPage = () => {
  return (
    <div className="main-page container">
      <div className="main-page__header title">
        <img className="main-page__icon" src={main} alt="main-icon" />
        <h1 className="main-page__title">Энциклопедия кино</h1>
      </div>

      <div className="main-page__main">
        <h2 className="main-page__subtitle">
          Энциклопедия кино - Ваш интерактивный советник для совершения
          путешествия в мир кинематографа!
        </h2>

        <div className="main-page__about">
          <section className="main-page__selections main-page__section">
            <h3 className="main-page__list_title title">
              Вы можете получить различные подборки кинофильмов:
            </h3>

            <ul className="main-page__list">
              <li className="main-page__list_item">
                <img
                  className="main-page__list_icon"
                  src={popular}
                  alt="popular"
                />
                <div className="main-page__list_text">Самые популярные</div>
              </li>

              <li className="main-page__list_item">
                <img className="main-page__list_icon" src={best} alt="best" />
                <div className="main-page__list_text">
                  Самые высокооценённые
                </div>
              </li>

              <li className="main-page__list_item">
                <img
                  className="main-page__list_icon"
                  src={newest}
                  alt="newest"
                />
                <div className="main-page__list_text">Самые свежие</div>
              </li>
            </ul>
          </section>

          <section className="main-page__random main-page__section">
            <h3 className="main-page__list_title title">
              Если хочется чего-то, но Вы не знаете, чего именно -
              воспользуйтесь функцией броска кубика:
            </h3>

            <ul className="main-page__list">
              <li className="main-page__list_item">
                <img
                  className="main-page__list_icon"
                  src={random}
                  alt="random"
                />
                <div className="main-page__list_text">Мне повезёт!</div>
              </li>
            </ul>
          </section>

          <section className="main-page__search main-page__section">
            <h3 className="main-page__list_title title">
              Если нужно получить информацию о каком-то конкретном фильме - Вы
              всегда можете воспользоваться поиском по названию:
            </h3>

            <ul className="main-page__list">
              <li className="main-page__list_item">
                <img
                  className="main-page__list_icon"
                  src={search}
                  alt="search"
                />
                <div className="main-page__list_text">Искать!</div>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="main-page__footer">
        Наслаждайтесь киномарафонами и открывайте для себя мир кинематографа!
      </div>
    </div>
  );
};

export default MainPage;
