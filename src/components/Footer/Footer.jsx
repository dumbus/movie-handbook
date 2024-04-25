import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__text'>
        <div>&copy; 2024, </div>
        <a 
          target="_blank" 
          href='https://github.com/dumbus' 
          className='footer__text_link'
        >
            dumbus (Дегтярёв Максим)
        </a>
      </div>
      
    </footer>
  )
};

export default Footer;
