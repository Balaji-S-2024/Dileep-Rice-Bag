import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/originallogo.png';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="address">
          <b>Address:</b>
          <br/>
          <p className='footer-text'>53/28 Sornanthan Street,</p>
          <p className='footer-text'>Uppidamangalam, </p>
          <p className='footer-text'>Karur-639003, </p>
          <p className='footer-text'>Tamilnadu.</p>
        </div>
        <div className="email"><a href="mailto:lpfuture369@gmail.com"  className='footer-text'><b>Email:</b><br/>lpfuture369@gmail.com</a></div>
        <div className="phnum"><b>Phone:</b><br/><p  className='footer-text'>+91 8489889037 </p><p  className='footer-text'>+91 9629814983</p></div>
      </div>
      <div className="footer-center">
        <div className="flogo"><img className="lplogo" src={logo} alt="" /></div>
        <div className="socials">
          <tr>
            <td className="sicon">
            <a href="https://api.whatsapp.com/send?phone=918489889037" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </td>
            <td className="sicon">
             <a href="https://instagram.com/lpfuture_?utm_source=qr" target="_blank" rel="noopener noreferrer"><BiLogoInstagramAlt /></a> 
            </td>
            <td className="sicon">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            </td>
          </tr>
        </div>
      </div>
      <div className="footer-right">
     
       
       
        <div>
        <p className='footer-text'>Pricing</p>
        </div>
        <div>
        <p className='footer-text'>About Us</p>
        </div>
        <div>
        <p className='footer-text'>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer