import React from 'react';

import './Error.scss';

import error from '../../assets/error.svg';

const Error = (props) => {
  return (
    <div className='error'>
      <img className='error__image' src={error} alt='error image' />

      <div className='error__description' >
        {`Произошла ошибка: ${props.errorMessage}`}
      </div>
    </div>
  )
}

export default Error;