import React from "react";
import { Link } from "react-router-dom"; // Import Link

const CTA = () => (
  <section className="cta">
    <h3>Ready to Transform Your Wellness?</h3>
    <p>Join thousands who have discovered balance through personalized Ayurvedic guidance.</p>
    {/* Add the button to navigate to the dashboard */}
    <Link to="/dashboard" className="btn orange">
      Go to my Wellness Dashboard
    </Link>
  </section>
);

export default CTA;

