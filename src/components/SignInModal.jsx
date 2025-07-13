import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SignInModal = ({ isOpen, onClose }) => { // Accept isOpen and onClose props
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const modalRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Effect to close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Effect to handle body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isOpen]);

  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in authentication logic here
    console.log("Sign In submitted:", formData);
    // Upon successful sign-in, navigate to the name entry page
    navigate("/name-entry");
    onClose(); // Close the modal after submission
  };

  // Render modal only if isOpen is true
  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="signin-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>×</span>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSignInSubmit}>
          <div className="input-with-icon">
            <input type="email" placeholder="Email" name="email" required onChange={handleInputChange} />
            <i className="input-icon" data-lucide="mail"></i>
          </div>
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              onChange={handleInputChange}
            />
            <button type="button" className="toggle-password" onClick={togglePassword}>
              <i data-lucide={passwordVisible ? "eye-off" : "eye"}></i>
            </button>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
