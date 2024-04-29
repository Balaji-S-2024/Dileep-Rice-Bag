// import React from 'react' 
import logo from '../../images/navlogo.png'

import './Navbar.css'

function Navbar() {

  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo' />
      
     
      <ul className='link-container'>
      <a href="/home"><li>Home</li></a>
      <a href="/rice-items"><li>Rice Items</li></a>
      <a href="/cattle-items"><li>Cattles Items</li></a>
      <a href="/pricing"><li>Pricing</li></a>
      <a href="/about"><li>About Us</li></a>
      <a href="/contact"><li>Contact Us</li></a>
      <a href="/foods"><li>Foods & Festivels</li></a>
      </ul>
    </nav>

  )
}
 
export default Navbar