import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import '../styles/home.styles.css';
import NavBar from '../components/Navigation/NavBar.js';
import HomeNav from '../components/Navigation/HomeNav.js';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  return (
    <div className='main-container'>
      {isMobile ? (
        <>
          <div className='col-1-mobile'>
            <h1 className='special-mobile'>MIA</h1>
            <h1 className='special-mobile'>CARMEN</h1>
            <p className='tagline'>Full Stack Developer / UX/UI Designer</p>
          </div>
          <div className='home-nav-mobile'>
            <HomeNav />
          </div>
        </>
      ) : isTablet ? (
        // Tablet Content
        <></>
      ) : (
        <>
          {/* <NavBar /> */}
          <div className='grid-container'>
            <div className='col-1'>
              <h1 className='special'>MIA</h1>
              <h1 className='special'>CARMEN</h1>
              <p className='tagline'>Full Stack Developer / UX/UI Designer</p>
            </div>
            <div className='col-2'>
              <HomeNav />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
