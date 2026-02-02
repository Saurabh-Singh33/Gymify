import React from "react";
{/*import "./Footer.css";*/}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>GYMIFY</h2>
          <p>
            Train smarter. Stay stronger.  
            Your fitness journey starts here.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Workout</li>
            <li>Pricing</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@gymify.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Gymify. All Rights Reserved.</p>
        {/* <p>Designed By Saurabh Singh Rathore</p> */}
      </div>
    </footer>
  );
};

export default Footer;
