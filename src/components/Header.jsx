import React from "react";
import leaf from "../assets/leaf.png";

const Header = () => (
  <header className="site-header">
    <div className="logo-section">
      <img src={leaf} alt="Logo" className="logo" />
      <h1 className="site-title">Tridosha AI</h1>
    </div>
    <nav className="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <button id="openSignIn">SignIn</button>
      <button id="openSignUp">SignUp</button>
    </nav>
  </header>
);

export default Header;
