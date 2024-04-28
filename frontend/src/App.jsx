import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Pricing from './components/Pricing/Pricing';
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
        <Route path="/*" element={<Not_found />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
