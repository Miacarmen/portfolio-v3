import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowDownShort } from 'react-icons/bs';

import '../styles/project.styles.css';
import linkData from '../data/project-data.json';


const ProjectPage = () => {
  // const { id } = useParams();
  // const data = linkData.find((data) => data.id === parseInt(id));
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleWheel = () => {
      setShowScrollIndicator(false); // Hide the arrow when scrolling starts
      window.removeEventListener('wheel', handleWheel);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    console.log('Fetching data for id:', id);
    const projectData = linkData.find((item) => item.id === parseInt(id));
    console.log('Fetched data:', projectData);
    setData(projectData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='project-container'>
      <>
        <div className='project-content'>
          <div>
            <h1 className='p-title'>{data.title}</h1>
            <p className='p-subtitle'>{data.subtitle}</p>
          </div>
          {showScrollIndicator && (
                <div className='col-3-4' id='scrollIndicator'>
                  <BsArrowDownShort style={{ width: '28px', height: '28px' }} />
                </div>
              )}
        </div>
        <div className='p-content-container'>
          {data.images.map((image, index) => (
            <div key={index} className='p-img-container'>
              <img
                src={image}
                alt={`img ${index + 1}`}
                className='p-image'
              ></img>
            </div>
          ))}
          <div className='p-desc'>{data.desc}</div>
          <div className='p-tools-container'>
          <h3 className='tools-header'>Tools Used:</h3>
          <div className='p-tools'>
            {data.tools.map((tool, index) => (
              <div key={index}>{tool}</div>
            ))}
          </div>
          </div>
          <div className='p-link'>
            <a href={data.link} target='_blank' rel='noreferrer'>
              <button className='link-btn'>{data.btnText}</button>
            </a>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectPage;
