import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeNav = () => {
  return (
    <div className='main-nav'>
      <ul className='home-nav'>
        <Link to='/work' style={{ textDecoration: 'none' }}>
          {' '}
          <li>WORK</li>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <li>ABOUT</li>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default HomeNav;
