import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className="ecommerce-footer">
      <div className="footer-section container">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      {/* Add more sections and content */}
    </footer>
  );
}

export default Footer;
