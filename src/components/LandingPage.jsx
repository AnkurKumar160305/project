import React, { useEffect } from "react";
import Hero from "./Hero";
import Doshas from "./Doshas";
import Journey from "./Journey";
import CTA from "./CTA";
import "../LandingPage.css";

const LandingPage = ({ onSignInClick }) => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);
 
  return (
    <>
      <main id="main-content">
        <Hero />
        <Doshas />
        <Journey />
 <CTA />
      </main>
    </>
  );
};

export default LandingPage;
