import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpModal = ({ onClose, onSignInClick, isOpen }) => { // Accept isOpen prop
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "", terms: false });
  const [isValid, setIsValid] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Effect to handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Effect to handle password validation
  useEffect(() => {
    const { username, email, password, terms } = formData;
    const validPassword = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
    setIsValid(!!username && !!email && validPassword && terms);
  }, [formData]);

  // Effect to handle clicks outside the modal (Keep this if you want this behavior)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Effect to handle body scroll when modal is open (Add this for consistency with SignInModal)
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

  const togglePassword = () =>
    setPasswordVisible((prev) => !prev);

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log("Sign Up submitted:", formData);
    // On successful sign-up, redirect the user to the name entry page
    navigate('/name-entry');
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="signup-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>×</span>
        <h2>Create Account</h2>
        <form onSubmit={handleSignUpSubmit}>
          <div className="input-with-icon">
            <input type="text" placeholder="Username" name="username" required onChange={handleInputChange} />
            <i className="input-icon" data-lucide="user"></i>
          </div>
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
            <button
              type="button"
              className="toggle-password"
              onClick={togglePassword}
            >
              <i data-lucide={passwordVisible ? "eye-off" : "eye"}></i>
            </button>
          </div>
          {!isValid && formData.password.length > 0 && (
            <div className="password-error">
              Password must be 8+ characters, include uppercase, number, and symbol.
            </div>
          )}
          <div className="checkbox-container">
            <input type="checkbox" id="agreeTerms" name="terms" onChange={handleInputChange} />
            <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
          </div>
          <button type="submit" disabled={!isValid}>Register</button>
        </form>
        <div className="modal-footer">
          <p>Already have an account? <a href="#" onClick={onSignInClick}>Sign In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
