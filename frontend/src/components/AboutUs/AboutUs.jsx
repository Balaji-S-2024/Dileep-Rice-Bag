// import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p className="about-description">
        At VNM Modern Rice Mill, we are passionate about providing the highest quality rice products to our customers.
        With a legacy dating back to 1998, we have been committed to excellence and innovation in the rice industry.
        Our mission is simple: to deliver premium quality rice products that enrich meals and delight taste buds.
        We strive for perfection in every grain, ensuring that our rice meets the highest standards of taste, texture,
        and nutritional value.
      </p>
      <div className="address">
        <h2>Address:</h2>
        <p>
          53/28 Sornanthan Street,<br />
          Uppidamangalam,<br />
          Karur-639003,<br />
          Tamilnadu.
        </p>
      </div>
      <div className="contact-info">
        <h2>Contact Us:</h2>
        <p>
          Email: lpfuture369@gmail.com<br />
          Phone: +91 8498899037, +91 9629814983
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
