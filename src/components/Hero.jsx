import React from "react";
import leaf from "../assets/leaf.png";

const Hero = () => (
  <section className="hero">
    <div className="logo-ring">
      <img src={leaf} alt="Tridosha Logo" />
    </div>
    <h1>Tridosha AI</h1>
    <p className="subtitle">
      Discover your unique Ayurvedic constitution and receive personalized wellness guidance powered by ancient wisdom and modern AI.
    </p>
    <div className="hero-buttons">
      <button className="btn orange"><i data-lucide="sparkles"></i>Start Dosha Assessment</button>
      <button className="btn white"><i data-lucide="book-open"></i>Learn About Ayurveda</button>
    </div>
    <div className="stats">
      <div><strong className="highlight">Smart Ayurveda</strong><p>For Modern You</p></div>
      <div><strong className="highlight">3</strong><p>Doshas Analyzed</p></div>
      <div><strong className="highlight">∞</strong><p>Personalized Plans</p></div>
    </div>
  </section>
);

export default Hero;
