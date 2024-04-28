import React from 'react';
import './Pricing.css'; 
import Basmati_Rice from '../../images/Basmati_Rice.jpg'
function PricingPage() {
  const riceBags = [
    {
      id: 1,
      name: 'Premium Basmati Rice',
      description: 'Finest quality Basmati rice for delicious meals',
      price: 29.99,
      imageUrl: Basmati_Rice, 
    },
    {
      id: 2,
      name: 'Long Grain White Rice',
      description: 'Versatile long-grain rice for everyday cooking',
      price: 19.99,
      imageUrl: Basmati_Rice, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 24.99,
      imageUrl: Basmati_Rice, 
    },
    
  ];

  return (
    <div className="pricing-page">
      <h1>Our Rice Bags</h1>
      <div className="rice-bag-grid">
        {riceBags.map((bag) => (
          <div className="rice-bag-card" key={bag.id}>
            <img src={bag.imageUrl} alt={bag.name} className="rice-bag-image" />
            <div className="rice-bag-details">
              <h2>{bag.name}</h2>
              <p className="rice-bag-description">{bag.description}</p>
              <p className="rice-bag-price">${bag.price.toFixed(2)}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
