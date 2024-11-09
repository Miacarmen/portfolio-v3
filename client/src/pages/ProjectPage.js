import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowDownShort } from 'react-icons/bs';
import ImgCarousel from '../components/Carousel/ImgCarousel';
import '../styles/project.styles.css';
import linkData from '../data/project-data.json';

const ProjectPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setShowScrollIndicator(false); // Hide the arrow after a small delay
      }, 100); // 100ms delay to prevent immediate hiding on minor movements

      // Remove event listeners after the first scroll
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };

    window.addEventListener('wheel', handleScroll); // Desktop scroll
    window.addEventListener('touchmove', handleScroll); // Mobile scroll

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  useEffect(() => {
    const projectData = linkData.find((item) => item.id === parseInt(id));
    setData(projectData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className='project-container'>
      <div className='project-content'>
        <div>
          {data.title && <h1 className='p-title'>{data.title}</h1>}
          {data.subtitle && <p className='p-subtitle'>{data.subtitle}</p>}
          {/* Render subtitleB only if available */}
          {data.subtitleB && <p className='p-subtitle'>{data.subtitleB}</p>}
        </div>
        {showScrollIndicator && (
          <div className='col-3-4' id='scrollIndicator'>
            <BsArrowDownShort style={{ width: '28px', height: '28px' }} />
          </div>
        )}
      </div>

      <div className='p-content-container'>
        {/* Render web images only if available */}
        {data.webImg &&
          Array.isArray(data.webImg) &&
          data.webImg.length > 0 &&
          data.webImg.map((image, index) => (
            <div key={index} className='p-img-container'>
              <img src={image} alt={`img ${index + 1}`} className='p-image' />
            </div>
          ))}

        {/* <div>
          <img src={data.phoneMockup} alt='phone mockup' className='phone-mockup' />
        </div> */}

        {/* Render description if available */}
        {data.desc && <div className='p-desc'>{data.desc}</div>}

        {/* Render phone mockup only if available */}
        {data.phoneMockup && (
          <div>
            <img
              src={data.phoneMockup}
              alt='phone mockup'
              className='phone-mockup'
            />
          </div>
        )}

        {/* Render descriptionB if available */}
        {data.descB && <div className='p-desc'>{data.descB}</div>}

        {/* Render carousel if flyerCollection is available */}
        {data.flyerCollection &&
          Array.isArray(data.flyerCollection) &&
          data.flyerCollection.length > 0 && (
            <div className='carousel-container'>
              <ImgCarousel flyers={data.flyerCollection} />
            </div>
          )}

        {/* Second carousel for flyerCollectionB */}
        {data.flyerCollectionB &&
          Array.isArray(data.flyerCollectionB) &&
          data.flyerCollectionB.length > 0 && (
            <div className='carousel-container'>
              <ImgCarousel flyers={data.flyerCollectionB} />
            </div>
          )}

        {/* Render tools if available */}
        {data.tools && Array.isArray(data.tools) && data.tools.length > 0 && (
          <div className='p-tools-container'>
            <h3 className='tools-header'>Tools Used:</h3>
            <div className='p-tools'>
              {data.tools.map((tool, index) => (
                <div key={index}>{tool}</div>
              ))}
            </div>
          </div>
        )}

        {/* Render button link if available */}
        {data.link && data.btnText && (
          <div className='p-link'>
            <a href={data.link} target='_blank' rel='noreferrer'>
              <button className='link-btn'>{data.btnText}</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
