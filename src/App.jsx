import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header"; // your navbar
import Footer from "./components/Footer";

import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Learn from "./components/Learn";
import SignIn from "./components/Modals";
import SignUp from "./components/Modals";
import NameEntryPage from "./components/NameEntryPage"; // or /pages if applicable

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/signin" element={<Modals />} />
        <Route path="/signup" element={<Modals />} />
        <Route path="/name-entry" element={<NameEntryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


