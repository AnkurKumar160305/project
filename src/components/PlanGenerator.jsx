import React, { useState } from "react";
import "../PlanGenerator.css";

const PlanGenerator = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [text, setText] = useState("");
  const [reminderActive, setReminderActive] = useState(false);

  const handleDurationClick = (duration) => {
    setSelectedDuration(duration);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleToggleReminder = () => {
    setReminderActive(!reminderActive);
  };

  return (
    <div className="Wellness">
      <div className="arrow">
        <button
          className="arrow-btn"
          onClick={() => (window.location.href = "dashboard.html")}
        >
          <img className="arrow-img" src="./images/down-arrow.png" alt="" />
          Back to Dashboard
        </button>
      </div>

      <header>
        <div className="left">
          <div className="header-bot-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-6 w-6 text-white"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>

          <div className="left-data">
            <h1>Wellness Plan Generator</h1>
            <p>Create your personalized Ayurvedic routine with progress tracking</p>
          </div>
        </div>

        <div className="right">
          <p>🌱 Kapha</p>
        </div>
      </header>

      <main>
        <p className="main-heading">Customize Your Plan</p>

        <div className="plan-duration">
          <p className="plan-duration-heading">Plan Duration</p>
          <div className="plan-duration-buttons">
            {[7, 14, 30].map((duration) => (
              <button
                key={duration}
                className={`day-${duration}`}
                onClick={() => handleDurationClick(duration)}
                style={{
                  backgroundColor:
                    selectedDuration === duration ? "rgb(248, 121, 48)" : "",
                  color: selectedDuration === duration ? "white" : "",
                }}
              >
                {duration} Days
              </button>
            ))}
          </div>
        </div>

        <div className="Reminders">
          <div className="Reminders-content">
            <p className="Reminders-heading">Daily Reminders</p>
            <p className="Reminders-text">Get notified about your wellness routine</p>
          </div>
          <div
            className={`onoff ${reminderActive ? "active" : ""}`}
            onClick={handleToggleReminder}
            style={{
              backgroundColor: reminderActive
                ? "rgb(248, 121, 48)"
                : "hsl(214.3 31.8% 91.4%)",
            }}
          >
            <button></button>
          </div>
        </div>

        <div className="description">
          <p className="description-heading">
            Additional Goals or Focus Areas (Optional)
          </p>
          <textarea
            rows="4"
            placeholder="e.g., improve sleep quality, boost energy, manage weight, reduce stress..."
            value={text}
            onChange={handleTextChange}
            style={{
              border:
                text.trim() !== ""
                  ? "1px solid orange"
                  : "1px solid rgb(196 209 196)",
            }}
          ></textarea>
        </div>

        <button className="get-solution">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar mr-2 h-5 w-5"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          Generate 7-Day Plan
        </button>
      </main>
    </div>
  );
};

export default PlanGenerator;
