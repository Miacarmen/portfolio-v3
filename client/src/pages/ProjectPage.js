import React from 'react';
import { useParams } from 'react-router-dom';

import '../styles/project.styles.css';
import linkData from '../data/project-data.json';

const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);
  const data = linkData.find((data) => data.id === parseInt(id));
  console.log(data);
  // const { state } = useLocation();

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
          <div className='p-img-container'>
            <img src={data.imgURL} alt={data.title}></img>
          </div>
          <div className='p-desc'>{data.desc}</div>
        </div>
      </>
    </div>
  );
};

export default ProjectPage;
