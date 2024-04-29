// import React from 'react';
import './RiceItems.css'; 
import Ricecar from '../../images/ricecar.jpg'
function RiceItems() {
  const Ricecars = [
    {
      id: 1,
      name: 'Premium Basmati Rice',
      description: 'Finest quality Basmati rice for delicious meals',
      price: 2999,
      imageUrl: Ricecar, 
    },
    {
      id: 2,
      name: 'Long Grain White Rice',
      description: 'Versatile long-grain rice for everyday cooking',
      price: 1999,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    {
      id: 3,
      name: 'Brown Rice',
      description: 'Healthy whole grain rice with a nutty flavor',
      price: 2499,
      imageUrl: Ricecar, 
    },
    
  ];

  return (
    <div className="pricing-page">
      <h1>Our Rice Items</h1>
      <div className="rice-bag-grid">
        {Ricecars.map((bag) => (
          <div className="rice-bag-card" key={bag.id}>
            <img src={bag.imageUrl} alt={bag.name} className="rice-bag-image" />
            <div className="rice-bag-details">
              <h2>{bag.name}</h2>
              <p className="rice-bag-description">{bag.description}</p>
              <p className="rice-bag-price">₹ {bag.price.toFixed(2)}</p>
              {/* <button className="add-to-cart-button">Add to Cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RiceItems;
