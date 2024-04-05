import React from 'react';

import '../styles/contact.styles.css';

const Contact = () => {
  return (
    <div className='main-container'>
      
      <div className='grid-container-2'>
        <div className='col-1-2-wrapper'>
        <div className='col-1-2'>
        <h1 className='contact-head'>CONTACT</h1>
          <p className='contact-subhead'>Need a new website or branding for your product? 
          <br /> Get in Touch!</p>
        </div>
        </div>
        <div className='col-2-2'>
          <form class='contact-form'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            <label for='email'>Email:</label>
            <input type='email' id='email' name='email' required />

            <label for='message'>Message:</label>
            <textarea type='text' id='message' name='message' required />

            <button className='submit-btn' type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
