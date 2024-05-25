import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/project.styles.css';
import linkData from '../data/project-data.json';

const ProjectPage = () => {
  const { id } = useParams();
  const data = linkData.find((data) => data.id === parseInt(id));

  return (
    <div className='project-container'>
      <>
        <div className='project-content'>
          <div>
            <h1 className='p-title'>{data.title}</h1>
            <p className='p-subtitle'>{data.subtitle}</p>
          </div>
        </div>
        <div className='p-content-container'>
          {data.images.map((image, index) => (
            <div className='p-img-container'>
              <img
                src={image}
                alt={`img ${index + 1}`}
                className='p-image'
              ></img>
            </div>
          ))}
          <div className='p-desc'>{data.desc}</div>
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
