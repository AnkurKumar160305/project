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
      <Header onSignInClick={onSignInClick} onSignUpClick={onSignUpClick} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard Route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/name-entry" element={<NameEntryPage />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Add Quiz Route */}
        <Route path="/result" element={<Result />} /> {/* Add Result Route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Routes>
      <Footer />

      {/* Render modals conditionally */}
      {activeModal === "signin" && <SignInModal onClose={closeModals} />}
      {activeModal === "signup" && <SignUpModal onClose={closeModals} />}
    </Router>
  );
}
export default App;


