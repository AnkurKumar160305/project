import React, { useEffect } from "react";
import "../Dashboard.css";

const Dashboard = () => {
  useEffect(() => {
    initializeDashboard();
    const intervalId = setInterval(updateWellnessStats, 30000);
    return () => clearInterval(intervalId);
  }, []);

  const initializeDashboard = () => {
    updateWellnessStats();
    showNotification("Welcome back! Ready to conquer the day?");
    updateReminders();
  };

  const updateWellnessStats = () => {
    document.querySelector(".wellness-score .stat-value").textContent = Math.floor(Math.random() * 100) + "%";
    document.querySelector(".mood-level .stat-value").textContent = ["😊", "😐", "😔"][Math.floor(Math.random() * 3)];
    document.querySelector(".hydration-level .stat-value").textContent = Math.floor(Math.random() * 100) + "%";
  };

  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className = "custom-notification";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add("show"), 10);
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  };

  const updateReminders = () => {
    const reminders = [
      "Drink water",
      "Take deep breaths",
      "Stretch for 5 minutes",
      "Smile 😄",
    ];
    const reminderList = document.querySelector(".reminder-list");
    if (reminderList) {
      reminderList.innerHTML = reminders.map(r => `<li>${r}</li>`).join("");
    }
  };

  return (
    <div className="main-content">
      <header className="header">
        <div className="header-content">
          <h1 className="app-title">EmoWell</h1>
          <div className="user-info">
            <img src="user-avatar.png" alt="User Avatar" className="user-avatar" />
            <span className="user-name">Hello, User!</span>
          </div>
        </div>
      </header>

      <section className="welcome-section">
        <h2 className="welcome-message">Good Morning! Here's your emotional wellness snapshot.</h2>
        <p className="sub-message">Let’s make today a balanced and mindful day 🌿</p>
      </section>

      <section className="wellness-stats">
        <div className="stat-card wellness-score">
          <div className="stat-header">
            <span className="stat-title">Wellness Score</span>
            <i className="fas fa-trending-up stat-icon green"></i>
          </div>
          <div className="stat-value">--%</div>
          <div className="stat-footer">Based on your recent inputs</div>
        </div>

        <div className="stat-card mood-level">
          <div className="stat-header">
            <span className="stat-title">Mood</span>
            <i className="fas fa-smile stat-icon yellow"></i>
          </div>
          <div className="stat-value">😊</div>
          <div className="stat-footer">You're feeling okay</div>
        </div>

        <div className="stat-card hydration-level">
          <div className="stat-header">
            <span className="stat-title">Hydration</span>
            <i className="fas fa-tint stat-icon blue"></i>
          </div>
          <div className="stat-value">--%</div>
          <div className="stat-footer">Stay hydrated!</div>
        </div>
      </section>

      <section className="recommendations-section">
        <h2 className="section-title">Recommended for You</h2>
        <div className="recommendation-list">
          <div className="recommendation-item">
            <i className="fas fa-brain icon purple"></i>
            <span>Meditation Session</span>
          </div>
          <div className="recommendation-item">
            <i className="fas fa-music icon teal"></i>
            <span>Soothing Playlist</span>
          </div>
          <div className="recommendation-item">
            <i className="fas fa-book icon orange"></i>
            <span>Positive Reading</span>
          </div>
        </div>
      </section>

      <section className="tracker-section">
        <h2 className="section-title">Mood & Symptom Tracker</h2>
        <div className="tracker">
          <div className="mood-tracker">
            <h3>Mood</h3>
            <div className="mood-options">
              <button className="mood-option">😊</button>
              <button className="mood-option">😐</button>
              <button className="mood-option">😔</button>
              <button className="mood-option">😠</button>
            </div>
          </div>
          <div className="symptom-tracker">
            <h3>Symptoms</h3>
            <ul className="symptom-list">
              <li><input type="checkbox" id="headache" /><label htmlFor="headache">Headache</label></li>
              <li><input type="checkbox" id="tired" /><label htmlFor="tired">Tired</label></li>
              <li><input type="checkbox" id="anxious" /><label htmlFor="anxious">Anxious</label></li>
              <li><input type="checkbox" id="sad" /><label htmlFor="sad">Sad</label></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="reminders-section">
        <h2 className="section-title">Reminders</h2>
        <ul className="reminder-list">
          {/* Dynamically populated by JS */}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

