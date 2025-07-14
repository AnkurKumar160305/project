import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Doshas from "./Doshas";
import Journey from "./Journey";
import '../LandingPage.css';
import * as lucide from "lucide-react";


const LandingPage = ({ onSignInClick }) => {
 
  return (
    <>
      <main id="main-content">
        <Hero />
        <Doshas />
        <Journey />
      </main>
    </>
  );
};

export default LandingPage;
