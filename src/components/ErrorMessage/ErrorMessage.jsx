import React from 'react';

import './ErrorMessage.scss';

import error from '../../assets/icons/error.svg';

const ErrorMessage = ({ content }) => {
  const defaultContent = (
    <div className="error-message">
      <img className="error-message__image" src={error} alt="error-image" />

      <div className="error-message__title">Упс... Что-то пошло не так...</div>
    </div>
  );

  return <div className="error-message">{content || defaultContent}</div>;
};

export default ErrorMessage;
