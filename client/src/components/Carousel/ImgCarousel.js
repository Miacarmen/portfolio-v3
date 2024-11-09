import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/carousel.styles.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

const ImgCarousel = ({ flyers }) => {
  const sliderRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

//   const captionIndexes = [0, 1]; 


  return (
    <div className='flyer-carousel'>
      {/* Custom previous arrow */}
      <button
        className='custom-arrow custom-prev'
        onClick={() => sliderRef.current.slickPrev()}
      >
        <BsArrowLeft size={24} />
      </button>

      <Slider ref={sliderRef} {...carouselSettings}>
      {flyers.map((flyer, index) => (
          <div key={index} className='flyer-img-container'>
            <img src={flyer.url} alt={`Flyer ${index + 1}`} className='flyer-image' />
            {/* Conditionally render caption based on index */}
            {/* Only render caption if it exists */}
            {flyer.caption && (
              <p className='flyer-caption'>{flyer.caption}</p>
            )}
          </div>
        ))}
      </Slider>

      {/* Custom next arrow */}
      <button
        className='custom-arrow custom-next'
        onClick={() => sliderRef.current.slickNext()}
      >
        <BsArrowRight size={24} />
      </button>
    </div>
  );
};

export default ImgCarousel;
