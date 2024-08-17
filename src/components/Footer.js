import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <div className='fcontainer'>
      <footer>
        <p>© 2024 BookAI. All rights reserved.</p>
        <div>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
      </div>
  );
};

export default Footer;
