import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

import notFound from '../../assets/icons/not-found.svg';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

const NotFoundPage = () => {
  const renderContent = () => {
    return (
      <>
        <img className="error-message__image" src={notFound} alt="not-found" />

        <div className="error-message__description">
          <div className="error-message__title title">
            Пока что здесь ничего нет...
          </div>
          <Link to={'/'} className="error-message__back_link">
            <button className="error-message__back_button">
              <div className="error-message__back_arrow">{'<<'}</div>

              <span className="error-message__back_text">На главную</span>
            </button>
          </Link>
        </div>
      </>
    );
  };

  const content = renderContent();

  return (
    <div className="not-found container">
      <ErrorMessage content={content} />
    </div>
  );
};

export default NotFoundPage;
