import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser';

import '../../styles/contact.styles.css';

const ContactForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // For mobile devices
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // For iPad devices

  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        // 'service_4xmxu8h',
        // 'template_khztqjk',
        e.target,
        // 'IkePfpVYGM7-q3VeV'
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  return (
    <>
      {isMobile ? (
        <div className='contact-container-mobile'>
          <div className='col-1-2'>
            <h1 className='contact-head'>CONTACT</h1>
            <p className='contact-subhead'>
              Need a new website?
              <br /> Get in Touch!
            </p>
          </div>
          <div className='col-2-2'>
            <form className='contact-form' onSubmit={sendEmail}>
              <label for='name'>Name:</label>
              <input type='text' id='name' name='name' required />

              <label for='email'>Email:</label>
              <input type='email' id='email' name='email' required />

              <label for='message'>Message:</label>
              <textarea type='text' id='message' name='message' required />

              <button className='submit-btn' type='submit'>
                Send
              </button>
              <p className={`thank-you-message ${emailSent ? 'show' : ''}`}>Thank you! Your Email Has Been Sent!</p>
            </form>
            
          </div>
        </div>
      ) : isTablet ? (
        <></>
      ) : (
        <>
          <div className='main-container'>
            <div className='grid-container-2'>
              <div className='col-1-2-wrapper'>
                <div className='col-1-2'>
                  <h1 className='contact-head'>CONTACT</h1>
                  <p className='contact-subhead'>
                    Need a new website or branding for your product?
                    <br /> Get in Touch!
                  </p>
                </div>
              </div>
              <div className='col-2-2'>
                <form className='contact-form'>
                  <label for='name'>Name:</label>
                  <input type='text' id='name' name='name' required />

                  <label for='email'>Email:</label>
                  <input type='email' id='email' name='email' required />

                  <label for='message'>Message:</label>
                  <textarea type='text' id='message' name='message' required />

                  <button className='submit-btn' type='submit'>
                    Send
                  </button>
                  <p className={`thank-you-message ${emailSent ? 'show' : ''}`}>Thank you! Your Email Has Been Sent!</p>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactForm;
