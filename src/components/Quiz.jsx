import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../Quiz.css';

const questions = [
  {
    category: "Physical Build",
    question: "How would you describes your body frame?",
    options: [
      "Thin, light frame with prominent joints",
      "Medium build with good muscle tone",
      "Large frame with solid, heavy build",
    ],
  },
  {
    category: "Energy Levels",
    question: "How is your typical energy pattern?",
    options: [
      "High bursts of energy followed by fatigue",
      "Steady, intense energy throughout the day",
      "Consistent, enduring energy but slow to start",
    ],
  },
  {
    category: "Sleep Patterns",
    question: "How do you typically sleep?",
    options: [
      "Light sleeper, often restless or interrupted",
      "Moderate sleeper, need 6-8 hours consistently",
      "Deep, heavy sleeper, enjoy long sleep",
    ],
  },
  {
    category: "Mental Qualities",
    question: "How would you describe your thinking style?",
    options: [
      "Quick, creative, many ideas at once",
      "Sharp, focused, goal-oriented",
      "Slow, steady, methodical thinking",
    ],
  },
  {
    category: "Emotional Response",
    question: "How do you handle stress?",
    options: [
      "Get anxious, worried, or overwhelmed easily",
      "Become irritated, angry, or impatient",
      "Withdraw, become stubborn, or depressed",
    ],
  },
  {
    category: "Digestion",
    question: "How is your appetite and digestion?",
    options: [
      "Variable appetite, gas, bloating, constipation",
      "Strong appetite, good digestion, get hungry often",
      "Slow digestion, feel heavy after meals",
    ],
  },
  {
    category: "Weather Preference",
    question: "What type of weather do you prefer?",
    options: [
      "Warm, humid weather; dislike cold and wind",
      "Cool, dry weather; dislike heat and humidity",
      "Warm, dry weather; dislike cold and damp",
    ],
  },
  {
    category: "Physical Activity",
    question: "What type of exercise do you prefer?",
    options: [
      "Light, varied activities like yoga or walking",
      "Moderate to intense exercise like running or sports",
      "Slow, steady exercise; prefer gentle activities",
    ],
  },
];

function Quiz({ username }) { // Capitalized component name
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate(); // Initialize useNavigate

  const totalQuestions = questions.length;
  const question = questions[currentQuestion];
  const progressPercent = Math.round(((currentQuestion + 1) / totalQuestions) * 100);

  const handleOptionChange = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an option to continue.");
      return;
    }
    setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const submitQuiz = () => {
    if (!answers[currentQuestion]) {
      alert("Please select an option before submitting.");
      return;
    }
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    alert("Quiz submitted! Answers saved.");
    // Navigate to the result page after submission
    navigate('/result');
  };

  return (
    <div className="container">
      <h1 className="title">Dosha Assessment</h1>
      <p className="subtitle" id="username">
        Hi {username || "Friend"}! Answer these questions to discover your unique constitution
      </p>

      <div className="progress-section">
        <span id="question-count">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span id="percent-complete">{progressPercent}% Complete</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          id="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="dot"></span>
          <span className="category" id="category">
            {question.category}
          </span>
        </div>

        <h2 className="question" id="question-text">
          {question.question}
        </h2>

        <form className="options" id="options-form" onSubmit={(e) => e.preventDefault()}>
          {question.options.map((option, idx) => (
            <label className="custom-radio" key={idx}>
              <input
                type="radio"
                name="option"
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
              />
              <span className="radio-circle"></span>
              {option}
            </label>
          ))}
        </form>

        <div className="buttons">
          <button
            className="btn previous"
            onClick={prevQuestion}
            style={{ display: currentQuestion === 0 ? "none" : "inline-block" }}
          >
            <span className="text">Previous</span>
          </button>
          <button
            className="btn next"
            onClick={nextQuestion}
            style={{ display: currentQuestion === totalQuestions - 1 ? "none" : "inline-block" }}
          >
            <span className="text">Next</span>
          </button>
          <button
            className="btn res"
            id="get-results-btn"
            onClick={submitQuiz}
            style={{ display: currentQuestion === totalQuestions - 1 ? "inline-block" : "none" }}
          >
            <span className="text">Get Results</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz; // Capitalized component name
