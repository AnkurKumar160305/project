import React, { useState } from 'react';
import '../NameEntryPage.css';
import { User, MoveLeft, Sparkles } from 'lucide-react';

function NameEntryPage({ onStart }) {
  const [name, setName] = useState('');
  const isNameEntered = name.trim().length > 0;

  const handleBeginClick = () => {
    if (isNameEntered) {
      onStart(name.trim()); 
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon-circle"><User /></div>
        <h1 className="title">Welcome to Your Wellness Journey</h1>
        <p className="subtitle">Let's personalize your experience. What should we call you?</p>

        <label htmlFor="name" className="label">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="button-group">
          <button
            className="btn back-btn"
            onClick={() => window.location.href = 'landing-page.html'}
          >
            <MoveLeft />Back
          </button>

          <button
            className="btn assess-btn"
            disabled={!isNameEntered}
            style={{ opacity: isNameEntered ? 1 : 0.5 }}
            onClick={handleBeginClick}
          >
           <Sparkles/> Begin Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

export default NameEntryPage;
