import React from "react";

// ✅ Move DoshaCard BEFORE usage
const DoshaCard = ({ type, emoji, name, desc, traits }) => (
  <div className={`card ${type}`}>
    <h3 className="emoji" role="img" aria-label={name}>{emoji}</h3>
    <h3>{name}</h3>
    <p>{desc}</p>
    <span>{traits}</span>
  </div>
);

const Doshas = () => (
  <section className="doshas">
    <h2>The Three Doshas</h2>
    <div className="dosha-cards">
      <DoshaCard
        type="vata"
        emoji="🌬️"
        name="Vata"
        desc="Air & Space"
        traits="Creative, Energetic, Quick-thinking"
      />
      <DoshaCard
        type="pitta"
        emoji="🔥"
        name="Pitta"
        desc="Fire & Water"
        traits="Focused, Determined, Leader"
      />
      <DoshaCard
        type="kapha"
        emoji="🌱"
        name="Kapha"
        desc="Earth & Water"
        traits="Calm, Steady, Nurturing"
      />
    </div>
  </section>
);

export default Doshas;
