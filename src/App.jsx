import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "/src/components/Header.jsx"; // your navbar
import Footer from "/src/components/Footer.jsx";

import LandingPage from "/src/components/LandingPage.jsx";
import About from "/src/components/About.jsx";
import Contact from "/src/components/Contact.jsx";
import Learn from "/src/components/Learn.jsx";
import SignInModal from "/src/components/SignInModal.jsx"; // Import SignInModal
import SignUpModal from "/src/components/SignUpModal.jsx"; // Import SignUpModal
import NameEntryPage from "/src/components/NameEntryPage.jsx"; // or /pages if applicable
import Dashboard from "/src/components/Dashboard.jsx"; // Import Dashboard
import Result from "/src/components/Result.jsx"; // Import Result
import Quiz from "/src/components/Quiz.jsx"; // Import Quiz

// Basic Placeholder Components for new routes
const PrivacyPolicy = () => (
  <div>
    <h1>Privacy Policy</h1>
  </div>
);
const CookiesPolicy = () => (
  <div>
    <h1>Cookies Policy</h1>
  </div>
);


function App() {
  const [activeModal, setActiveModal] = useState(null);

  const closeModals = () => setActiveModal(null);

  const onSignInClick = () => setActiveModal("signin");
  const onSignUpClick = () => setActiveModal("signup");

  return (
    <Router>
      {/* Start with just Header and Footer */}
      <Header onSignInClick={onSignInClick} onSignUpClick={onSignUpClick} />
      {/* Keep the main content area simple for now */}
      <div>
        {/* We'll add Routes back later */}
        <h2>Main Content Placeholder</h2>
      </div>
      <Footer />

      {/* Modals rendered as overlays outside of Routes */}
      <SignInModal isOpen={activeModal === "signin"} onClose={closeModals} />
      <SignUpModal isOpen={activeModal === "signup"} onClose={closeModals} onSignInClick={onSignInClick} />
    </Router>
  );
}
export default App;

