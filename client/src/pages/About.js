import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/about.styles.css';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <div className='about-container'>
      {isMobile ? (
        <>
          <div className='about-main-container-mobile'>
            <div className='about-header-mobile'>
              <h1 className='about-header'>ABOUT</h1>
            </div>
            <div className='about-header-content-mobile'>
              <div className='col-1-2-mobile'>
                <h2 className='about-tagline'>
                  I’m Mia. A Developer and Designer
                  <br />
                  based in Los Angeles, CA.
                </h2>
              </div>
              <div className='col-2-2-mobile'>
                <img
                  src='https://placehold.jp/160x200.png'
                  alt='Mia Carmen'
                  className='about-img'
                />
              </div>
            </div>
          </div>
          <div className='about-content-mobile'>
            <p className='about-text'>
              Having always had a passion for art and technology, I have found
              web development to be the most rewarding way to combine my love
              for both.
            </p>
            <br />
            <p className='about-text'>
              I love all things digital design because they allow me to be able
              to create things that have a purpose and solve real problems,
              whether it’s through tools like Illustrator or Sketch, or
              Languages like HTML/CSS and Javascript. It’s the utilized
              combination and understanding of both digital worlds that allows
              me to create intuitive and dynamic user experiences and solutions
              that help people, from a fresh and unique perspective.
            </p>
            <br />
            <p className='about-text'>
              From conception to delivery, understanding the client’s needs and
              insights, and delivering solutions as quickly as possible, then
              learning and improving through iteration is the key to great
              design.
            </p>
          </div>

          <div className='experience-mobile'>
            <h3 className='about-subheader-mobile'>EXPERIENCE</h3>
            <ul id='exp-list-mobile'>
              <li>
                7 years experience in Graphic Design (Illustrator / InDesign /
                Photoshop / Sketch)
              </li>
              <li>
                5 years experience Front-end Web Development (HTML / CSS /
                Javascript)
              </li>
              <li>3 Years Experience React</li>
              <li>2 years experience Back-end Web Development</li>
              <li>3 Years experience UX/UI Design</li>
            </ul>
          </div>

          <div className='skills-mobile'>
            <h3 className='about-subheader-mobile'>SKILLS</h3>
            <h3 className='sub-cat'>Design:</h3>
            <ul className='skill-list-mobile'>
              <li>
                Illustrator / Photoshop / InDesign / Animate / AfterEffects /
                Sketch / Procreate / Figma / Framer
              </li>
            </ul>
            <h3 className='dev-cat'>Development:</h3>
            <ul className='skill-list-mobile'>
              <li>
                HTML <span>/</span> CSS <span>/</span> Javascript <span>/</span>{' '}
                JQuery <span>/</span> NodeJS <span>/</span> React <span>/</span>{' '}
                Redux <span>/</span>
                TailwindCSS <span>/</span> DaisyUI <span>/</span> Bootstrap{' '}
                <span>/</span> MaterialUI <span>/</span>
                Styled-Components <span>/</span> ExpressJS <span>/</span>{' '}
                MongoDB <span>/</span> Mongoose <span>/</span> GraphQL{' '}
                <span>/</span>
                Apollo <span>/</span> NoSQL <span>/</span> MySQL <span>/</span>{' '}
                Sequelize <span>/</span> AJAX <span>/</span> APIs <span>/</span>{' '}
                Heroku <span>/</span>
                Firebase <span>/</span> Netlify
              </li>
            </ul>
          </div>

          <div className='btn-container'>
            <button className='resume-btn'> Resume</button>
          </div>
        </>
      ) : isTablet ? (
        <></>
      ) : (
        <>
          <div className='grid-container-3'>
            <div className='col-1-3'>
              <h1 className='about-head'>ABOUT</h1>
              <h2 className='about-tagline'>
                I’m Mia. A Developer and Designer
                <br />
                based in Los Angeles, CA.
              </h2>
              <p className='about-text'>
                Having always had a passion for art and technology, I have found
                web development to be the most rewarding way to combine my love
                for both.
              </p>
              <br />
              <p className='about-text'>
                I love all things digital design because they allow me to be
                able to create things that have a purpose and solve real
                problems, whether it’s through tools like Illustrator or Sketch,
                or Languages like HTML/CSS and Javascript. It’s the utilized
                combination and understanding of both digital worlds that allows
                me to create intuitive and dynamic user experiences and
                solutions that help people, from a fresh and unique perspective.
              </p>
              <br />
              <p className='about-text'>
                From conception to delivery, understanding the client’s needs
                and insights, and delivering solutions as quickly as possible,
                then learning and improving through iteration is the key to
                great design.
              </p>
            </div>

            <div className='col-2-3'>
              <img
                src='https://placehold.jp/360x600.png'
                alt='Mia Carmen'
                className='about-img'
              />
            </div>
          </div>
          <div className='experience'>
            <ul id='exp-list'>
              <h3 className='about-header'>EXPERIENCE</h3>
              <li>
                7 years experience in Graphic Design
                (Illustrator/InDesign/Photoshop/Sketch)
              </li>
              <li>
                5 years experience Front-end Web Development
                (HTML/CSS/Javascript)
              </li>
              <li>3 Years Experience React</li>
              <li>2 years experience Back-end Web Development</li>
              <li>3 Years experience UX/UI Design</li>
            </ul>
          </div>

          <div className='skills'>
            <ul id='skill-list'>
              <h3 className='about-header'>SKILLS</h3>
              <h3 className='sub-cat'>Design:</h3>
              <li>
                Illustrator / Photoshop / InDesign / Animate / AfterEffects /
                Sketch / Procreate / Figma / Framer
              </li>
              <h3 className='dev-cat'>Development:</h3>
              <li>
                HTML / CSS / Javascript / JQuery / NodeJS / React / Redux /
                TailwindCSS / DaisyUI / Bootstrap / MaterialUI /
                Styled-Components / ExpressJS / MongoDB / Mongoose / GraphQL /
                Apollo / NoSQL / MySQL / Sequelize / AJAX / APIs / Heroku /
                Firebase / Netlify
              </li>
            </ul>
          </div>

          <div className='btn-container'>
            <button className='resume-btn'> Resume</button>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
