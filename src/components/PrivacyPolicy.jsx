import React from "react";
import { Link } from "react-router-dom"; // Import Link
const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src="/images/leaf.png" alt="Tridosha Logo" />
          <span className="logo-text">Tridosha AI</span>
        </div>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: January 2025</p>
      </div>

      <div className="content">
        <h2>Introduction</h2>
        <p>
          Welcome to Tridosha AI. We respect your privacy and are committed to
          protecting your personal data...
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as:</p>
        <ul>
          <li>Account information (name, email address)</li>
          <li>Health and wellness data you share...</li>
          <li>Dosha assessment responses</li>
          <li>Communication preferences</li>
          <li>Usage data and interaction patterns</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide personalized Ayurvedic wellness recommendations</li>
          <li>Improve our AI algorithms and services</li>
          <li>Send relevant health content</li>
          <li>Customer support</li>
          <li>Analyze user experience</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational security
          measures...
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do not sell or share your personal information except:
        </p>
        <ul>
          <li>To provide services</li>
          <li>When required by law</li>
          <li>To protect our rights</li>
        </ul>

        <h2>Your Rights</h2>
        <ul>
          <li>Access personal data</li>
          <li>Correct inaccurate info</li>
          <li>Delete your account</li>
          <li>Export your data</li>
          <li>Opt-out of marketing</li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies... see our <a href="/cookie-policy">Cookie Policy</a>.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy... "Last updated" date will change.
        </p>

        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>If you have any questions:</p>
          <p>
            Email: <a href="mailto:privacy@Tridosha.ai">privacy@Tridosha.ai</a><br />
            Phone: +1 (555) 123-4567
          </p>
        </div>
      </div>
      <Link to="/" className="back-link"> {/* Use Link component */}
        <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Home
      </Link>

      <div className="footer">
        <p>&copy; 2025 Tridosha AI. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
