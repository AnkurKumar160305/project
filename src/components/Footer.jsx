import React from "react";
import leaf from "../assets/leaf.png";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div>
        <h2><img className="flogo" src={leaf} alt="Logo" /> Tridosha AI</h2>
        <p>Combining 5,000 years of Ayurvedic wisdom with modern AI for personalized wellness guidance.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Learn Ayurveda</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p><i data-lucide="mail"></i> support@Tridosha.ai</p>
        <p><i data-lucide="phone"></i> +1 (555) 123-4567</p>
        <p><i data-lucide="map-pin"></i> 123 Wellness Street, Mindful City</p>
      </div>
    </div>
    <div className="footer-bottom">
      © 2025 Tridosha AI. All rights reserved.
    </div>
  </footer>
);

export default Footer;
