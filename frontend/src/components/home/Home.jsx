// Home.js
import React from 'react';
import './Home.css';
import RiceCarousel from './carousel/RiceCarousel';
import Basmati_Rice from '../../images/Basmati_Rice.jpg'

function Home() {


  const imagesA = [
    {image:"../../../images/ricecarousel.jpg"}, 
    {image:"../../../images/ricecarousel.jpg"}, 
    {image:"../../../images/ricecarousel.jpg"}
  ];


  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to RiceCo</h1>
        <p>Your one-stop shop for high-quality rice products</p>
      </header>
      <RiceCarousel/>
      <section className="features">
        <h2>Our Products</h2>
        <div className="feature-list">
          <div className="feature">
            <img src={Basmati_Rice} alt=""  />
            <h3>Basmati Rice</h3>
            <p>Discover the aromatic flavor of our premium basmati rice.</p>
          </div>
          <div className="feature">
            <img src={Basmati_Rice} alt="" />
            <h3>Long Grain Rice</h3>
            <p>Perfect for everyday cooking, our long grain rice is versatile and delicious.</p>
          </div>
          <div className="feature">
            <img src={Basmati_Rice} alt="" />
            <h3>Parboiled Rice</h3>
            <p>Try our parboiled rice for a nutritious and hearty meal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
