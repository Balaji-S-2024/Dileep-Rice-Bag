import { useParams } from 'react-router-dom';
import './OfferDetails.css'; 
function OfferDetails() {
    const { id, imageUrl, name, description } = useParams();
  // Mock data (replace with your actual data fetching logic)
  const offer = {
    id: id,
    name: name,
    imageUrl: imageUrl,
    description: description,
  };

  return (
    <div className="offer-details-page">
      {/* <h1>{offer.id}</h1> */}
      <h1>{offer.name}</h1>
      <img src={imageUrl} alt="Offer" />
      <p>{offer.description}</p>
    </div>
  );
}

export default OfferDetails;
