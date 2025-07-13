import React from "react";
import { Link } from "react-router-dom"; // Import Link
import leaf from "../assets/leaf.png";

const Header = ({ onSignInClick, onSignUpClick }) => ( // Accept props
  <header className="site-header">
    <div className="logo-section">
      <img src={leaf} alt="Logo" className="logo" />
      <h1 className="site-title">Tridosha AI</h1>
    </div>
    <nav className="nav-links">
      <Link to="/">Home</Link> {/* Use Link */}
      <Link to="/about">About</Link> {/* Use Link */}
      <Link to="/contact">Contact</Link> {/* Use Link */}
      <button onClick={onSignInClick}>SignIn</button> {/* Use onClick prop */}
      <button onClick={onSignUpClick}>SignUp</button> {/* Use onClick prop */}
    </nav>
  </header>
);

export default Header;

