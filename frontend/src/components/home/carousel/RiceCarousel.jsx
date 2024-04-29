import { useState, useEffect } from 'react';
import './Carousel.css'; // Assuming you have a CSS file for styling
import img1 from '../../../images/ricecar.jpg';
import img2 from '../../../images/farmer.jpg';
import img3 from '../../../images/farmer.jpg';
import img4 from '../../../images/farmer.jpg';
import img5 from '../../../images/farmer.jpg';

const images = [img1, img2,img3,img4,img5];

const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
          <img className="carousel-image" src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default MyCarousel;
