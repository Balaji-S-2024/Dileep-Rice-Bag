// Home.js
// import React from 'react';
import './Home.css';
import RiceCarousel from './carousel/RiceCarousel';
import Basmati_Rice from '../../images/Basmati_Rice.jpg'

function Home() {


  // const imagesA = [
  //   {image:"../../../images/ricecarousel.jpg"}, 
  //   {image:"../../../images/ricecarousel.jpg"}, 
  //   {image:"../../../images/ricecarousel.jpg"}
  // ];


  return (
    <div className="landing-page">
      <header className="header">
        <h1 className='top'>WELCOME TO VNM MODERN RICEMILL</h1>
        <p>Your one-stop shop for high-quality rice products</p><br></br>
      </header>
      <RiceCarousel/>
      <section className="features">
        <h2 className='P'>OUR PRODUCTS</h2><br></br>
        <div className="feature-list">
          <div className="feature">
            <img src={Basmati_Rice} alt=""  />
            <h3>Basmati Rice</h3>
            <p className='topic'>Discover the aromatic flavor of our premium basmati rice.</p>
          </div>
          <div className="feature">
            <img src={Basmati_Rice} alt="" />
            <h3>Long Grain Rice</h3>
            <p className='topic'>Perfect for everyday cooking, our long grain rice is versatile and delicious.</p>
          </div>
          <div className="feature">
            <img src={Basmati_Rice} alt="" />
            <h3>Parboiled Rice</h3>
            <p className='topic'>Try our parboiled rice for a nutritious and hearty meal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
