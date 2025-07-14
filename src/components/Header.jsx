import React from "react";
import { Link } from "react-router-dom";
import leaf from "../assets/leaf.png";
import '../Header.css';

const Header = ({ onSignInClick, onSignUpClick }) => {
  return (
    <header className="site-header">
      <div className="logo-section">
        <img src={leaf} alt="Logo" className="logo" />
        <h1 className="site-title">Tridosha AI</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={onSignInClick}>Sign In</button>
        <button onClick={onSignUpClick}>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
