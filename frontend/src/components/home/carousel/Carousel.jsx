// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import ricecarousel from '../../../images/c1.jpg'

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, // Normal transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"></button>, 
    nextArrow: <button className="slick-next"></button>,
    autoplay:true,
  };

  console.log(images);

  return (
    <Slider {...settings} className='carousel-container'>
      {images.map((image, index) => (
        <div key={index} className="slide">
          <img src={ricecarousel} alt={`Slide ${index + 1}`} className='carousel-img' />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
