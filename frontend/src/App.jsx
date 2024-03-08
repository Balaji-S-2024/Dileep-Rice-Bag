import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
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
        <Route path="/*" element={<Not_found />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
