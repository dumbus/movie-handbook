import './ErrorMessage.scss';

import error from '../../assets/error.svg';

const ErrorMessage = () => {
  return (
    <div className='error-message'>
      <img className='error-message__image' src={error} alt='error-image' />

      <div className='error-message__title' >
        Упс... Что-то пошло не так...
      </div>
    </div>
  );
};

export default ErrorMessage;
