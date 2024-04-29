import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Pricing from './components/Pricing/Pricing';
import CattleFeed from './components/CattleFeed/CattleFeed';
import RiceItems from './components/RiceItems/RiceItems';
import FoodAndFestivalOffers from './components/FoodAndFestivalOffers/FoodAndFestivalOffers';
import OfferDetails from './components/FoodAndFestivalOffers/OfferDetails';
import Not_found from './components/not-found/Not_found';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      {/* <Carousel images={images} /> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/cattle-items" element={<CattleFeed />} />
        <Route path="/rice-items" element={<RiceItems />} />
        <Route path="/foods" element={<FoodAndFestivalOffers />} />
        <Route path="/offer/:id/:imageUrl/:name/:description" element={<OfferDetails />} />
        <Route path="/*" element={<Not_found />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
