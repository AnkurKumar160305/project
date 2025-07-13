import React, { useState, useEffect, useRef } from "react";

const Modals = () => {
  const [activeModal, setActiveModal] = useState(null); 
  const [passwordVisible, setPasswordVisible] = useState({ signin: false, signup: false });
  const [formData, setFormData] = useState({ username: "", email: "", password: "", terms: false });
  const [isValid, setIsValid] = useState(false);
  const mainRef = useRef(null);


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModals();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

 
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.classList.toggle("blurred", !!activeModal);
      document.body.style.overflow = activeModal ? "hidden" : "auto";
    }
  }, [activeModal]);

  
  useEffect(() => {
    const { username, email, password, terms } = formData;
    const validPassword = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password);
    setIsValid(!!username && !!email && validPassword && terms);
  }, [formData]);

  const closeModals = () => setActiveModal(null);

  const togglePassword = (type) =>
    setPasswordVisible((prev) => ({ ...prev, [type]: !prev[type] }));

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    alert("Sign In submitted");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up submitted");
  };

  return (
    <>
      {/* Attach blur ref */}
      <div ref={mainRef} id="main-content" style={{ display: "none" }}></div>

      {/* Sign In Modal */}
      {activeModal === "signin" && (
        <div className="modal-overlay active" onClick={closeModals}>
          <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModals}>×</span>
            <h2>Welcome Back</h2>
            <form onSubmit={handleSignInSubmit}>
              <div className="input-with-icon">
                <input type="email" placeholder="Email" name="email" required onChange={handleInputChange} />
                <i className="input-icon" data-lucide="mail"></i>
              </div>
              <div className="password-container">
                <input
                  type={passwordVisible.signin ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => togglePassword("signin")}
                >
                  <i data-lucide={passwordVisible.signin ? "eye-off" : "eye"}></i>
                </button>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className="modal-footer">
              <p><a href="#">Forgot password?</a></p>
              <p>Don't have an account? <a href="#" onClick={() => setActiveModal("signup")}>Sign Up</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {activeModal === "signup" && (
        <div className="modal-overlay active" onClick={closeModals}>
          <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModals}>×</span>
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
                  type={passwordVisible.signup ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  required
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => togglePassword("signup")}
                >
                  <i data-lucide={passwordVisible.signup ? "eye-off" : "eye"}></i>
                </button>
              </div>
              {!isValid && formData.password.length > 0 && (
                <div className="password-error">
                  Password must be 8+ characters, include uppercase, number, and symbol.
                </div>
              )}
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  onChange={handleInputChange}
                />
                <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
              </div>
              <button type="submit" disabled={!isValid}>Register</button>
            </form>
            <div className="modal-footer">
              <p>Already have an account? <a href="#" onClick={() => setActiveModal("signin")}>Sign In</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Triggers for buttons in Header */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const signinBtn = document.getElementById('openSignIn');
              const signupBtn = document.getElementById('openSignUp');
              signinBtn?.addEventListener('click', e => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openModal', { detail: 'signin' }));
              });
              signupBtn?.addEventListener('click', e => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openModal', { detail: 'signup' }));
              });
            });
          `,
        }}
      />

      {/* Listen for global events */}
      <OpenModalListener onOpen={(type) => setActiveModal(type)} />
    </>
  );
};

const OpenModalListener = ({ onOpen }) => {
  useEffect(() => {
    const handler = (e) => onOpen(e.detail);
    window.addEventListener("openModal", handler);
    return () => window.removeEventListener("openModal", handler);
  }, [onOpen]);
  return null;
};

export default Modals;
