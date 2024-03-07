import React from 'react'
import logo from '../../images/rice100.jpg'
import './Navbar.css'

function Navbar() {

  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo' />
      <p className='name'>Dileep & co</p>
      <ul className='link-container'>
      <a href="/home"><li>Home</li></a>
      <a href="/"><li>Rice Items</li></a>
      <a href="/"><li>Cattles Items</li></a>
      <a href="/"><li>Pricing</li></a>
      <a href="/"><li>About Us</li></a>
      <a href="/"><li>Contact Us</li></a>
      <a href="/"><li>Foods & Festivels</li></a>
      </ul>
    </nav>

  )
}

export default Navbar