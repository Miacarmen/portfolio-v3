import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../styles/nav.styles.css';

const NavBar = () => {
  const location = useLocation();

  let navbarContent = (
    <Link
      key='nav-link'
      to='/'
      className='nav-link'
      onMouseEnter={(e) => (e.target.style.color = '#ffcae0')}
      onMouseLeave={(e) => (e.target.style.color = '#f8f8ff')}
    >
      HOME
    </Link>
  );

  if (location.pathname === '/') {
    navbarContent = (
      <div className='social-nav'>
        <ul className='social-links'>
          <li>
            <a
              href='https://github.com/Miacarmen'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#f8f8ff', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffcae0')}
              onMouseLeave={(e) => (e.target.style.color = '#f8f8ff')}
            >
              GH
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/maitreya-carmen-7750a6b8/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: '#f8f8ff', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = '#ffcae0')}
              onMouseLeave={(e) => (e.target.style.color = '#f8f8ff')}
            >
              LI
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (
    location.pathname.startsWith('/work/') &&
    location.pathname.length > '/work/'.length
  ) {
    navbarContent = (
      <Link
        to='/work'
        className='nav-link'
        // style={navLinkStyle}
        onMouseEnter={(e) => (e.target.style.color = '#ffcae0')}
        onMouseLeave={(e) => (e.target.style.color = '#f8f8ff')}
      >
        WORK
      </Link>
    );
  }

  return <div className='nav-container'>{navbarContent}</div>;
};

export default NavBar;
