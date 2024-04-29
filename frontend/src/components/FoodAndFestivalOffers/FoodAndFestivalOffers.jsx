import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FoodAndFestivalOffers.css'; 
import sample from '../../images/farmer.jpg'
function FoodAndFestivalOffers() {

 
  const [timer, setTimer] = useState(2592000); // Initial timer value in seconds (30 days)

  // Calculate days, hours, minutes, and seconds
   const days = Math.floor(timer / (24 * 3600));
  const hours = Math.floor((timer % (24 * 3600)) / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  // Decrease the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      id: 1,
      name: 'Christmas Special',
      description: 'Enjoy our special Christmas menu with your loved ones!',
      imageUrl: sample, // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Diwali Festival',
      description: 'Celebrate Diwali with our delicious festival sweets and snacks!',
      imageUrl: sample, // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Summer BBQ',
      description: 'Fire up the grill and enjoy our summer BBQ offers!',
      imageUrl: sample, // Replace with actual image URL
    },
    // Add more offers as needed
  ];

  return (
    <div className="food-and-festival-offers">
      <h1>Special Offers</h1>
      <div className="timer">
        {days} days : {hours} hours : {minutes} minutes : {seconds} seconds left
      </div>
      <div className="offer-cards">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <img src={offer.imageUrl} alt={offer.name} className="offer-image" />
            <div className="offer-details">
              <h2>{offer.name}</h2>
              <p className="offer-description">{offer.description}</p>
              <Link
            to={`/offer/${offer.id}/${encodeURIComponent(offer.imageUrl)}/${encodeURIComponent(offer.name)}/${encodeURIComponent(offer.description)}`}
            className="view-offer-button"
          >
            View Offer
          </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodAndFestivalOffers;
