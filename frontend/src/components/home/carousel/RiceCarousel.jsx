// Carousel.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import img1 from '../../../images/ricecar.jpg';
import img2 from '../../../images/farmer.jpg';

const RiceCarousel = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 250 milliseconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []); // Run this effect only once when the component mounts

  const totalSlides = 2;


  return (
    <Carousel selectedItem={activeSlide} onChange={setActiveSlide} emulateTouch={true}>
      <div key="slide1" className="image-container">
        <img className='img' src={img1} alt="Image 1" />
        <p className="caption">Caption 1</p>
      </div>
      <div key="slide2" className="image-container">
        <img className='img' src={img2} alt="Image 2" />
        <p className="caption">Caption 2</p>
      </div>
    </Carousel>
  );
};

export default RiceCarousel;
