import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <div className='header__logo'>
          <svg className='header__logo_svg'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
            <polyline points="17 2 12 7 7 2" />
          </svg>

          <div className='header__logo_line' />
          <div className='header__logo_text'>Энциклопедия кино</div>
        </div>
      </Link>

      <nav className='header__nav'>
        <Link to='/'>
          <span className='header__nav_link' >Главная</span>
        </Link>
      </nav>
    </header>
  )
};

export default Header;
