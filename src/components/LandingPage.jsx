import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Doshas from "./Doshas";
import Journey from "./Journey";
import CTA from "./CTA";
import Footer from "./Footer";
import Modals from "./Modals";
import "./LandingPage.css";

const LandingPage = () => {
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Doshas />
        <Journey />
        <CTA />
        <Footer />
      </main>
      <Modals />
    </>
  );
};

export default LandingPage;
