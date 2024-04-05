import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='main-container'>
      <div className='error-container'>
        <h1 className='error-header'>404: Page Not Found</h1>
        <p className='error-tagline'>Houston We Have a Problem...</p>
        <div className='btn-container'>
          <Link to='/'>
            <button className='back-btn'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
