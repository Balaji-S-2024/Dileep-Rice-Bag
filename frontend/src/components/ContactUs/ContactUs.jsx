// import React from 'react';
import './ContactUs.css'; 

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        Have questions or inquiries? Reach out to us using the contact information below, or fill out the form
        and we will get back to you as soon as possible.
      </p>
      <div className="contact-info">
        <h2>Contact Information:</h2>
        <p>
          Email: lpfuture369@gmail.com<br />
          Phone: +91 8498899037, +91 9629814983
        </p>
        <p>
          Address:<br />
          53/28 Sornanthan Street,<br />
          Uppidamangalam,<br />
          Karur-639003,<br />
          Tamilnadu.
        </p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
