import React from "react";

const steps = [
  { icon: "brain", title: "AI Assessment", desc: "Advanced AI analyzes your responses to determine your unique dosha constitution." },
  { icon: "heart", title: "Personalized Plan", desc: "Receive custom diet, lifestyle, and herbal recommendations tailored to you." },
  { icon: "message-circle", title: "AI Wellness Chat", desc: "Instant answers to your wellness questions from our AI Guide." },
  { icon: "calendar", title: "Progress Tracking", desc: "Monitor your wellness journey with insights and adaptive recommendations." },
];

const Journey = () => (
  <section className="journey">
    <h2>Your Wellness Journey</h2>
    <div className="journey-steps">
      {steps.map((step, i) => (
        <div className="step" key={i}>
          <div className="icon"><i data-lucide={step.icon}></i></div>
          <h4>{step.title}</h4>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Journey;
