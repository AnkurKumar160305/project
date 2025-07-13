import React, { useEffect, useState } from "react";
import "../Learn.css";
import leafIcon from "../assets/leaf.png";
import leafLogo from "../assets/leaf logo.png";

function Learn() {
  const [visibleSection, setVisibleSection] = useState("page1");

  useEffect(() => {
    setVisibleSection("page1");
  }, []);

  const handleToggle = (section) => {
    setVisibleSection(section);
  };

  const [activeTab, setActiveTab] = useState("agni");

  const handleAgniTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hero">
      {/* Navigation Buttons */}
      <div className="box1">
        <button onClick={() => handleToggle("page1")}>Introduction</button>
        <button onClick={() => handleToggle("dosha")}>The Doshas</button>
        <button onClick={() => handleToggle("page3")}>Principles</button>
        <button onClick={() => handleToggle("page4")}>Practice</button>
      </div>

      {/* Section 1: Intro */}
      {visibleSection === "page1" && (
        <div className="page1">
          <div className="box2">
            <div className="logo">
              <img src={leafLogo} alt="Leaf Icon" />
            </div>
            <h1>What is Ayurveda?</h1>
            <h3>The Science of Life and Longevity</h3>
            <p>
              Ayurveda is a 5,000-year-old system of natural healing that
              originated in India. The word "Ayurveda" comes from Sanskrit:
              "Ayur" (life) and "Veda" (knowledge or science).
            </p>
          </div>
        </div>
      )}

      {/* Section 2: Dosha */}
      {visibleSection === "dosha" && (
        <div className="dosha">
          <div className="over">
            <h2>The Three Doshas</h2>
            <p>
              Your unique mind-body constitution based on the five elements
            </p>
          </div>

          <div className="vata">
            <div className="logoname">
              <div className="logoimg">🌬️</div>
              <div className="name">
                <span className="badiheading">Vata</span>
                <span>Air & Space</span>
              </div>
            </div>
            {/* Add qualities and balance lists... */}
          </div>

          {/* Similarly Add Pitta and Kapha here as above */}
        </div>
      )}

      {/* Section 3: Principles */}
      {visibleSection === "page3" && (
        <div className="page3">
          <button className="buttons" onClick={() => handleAgniTab("agni")}>
            <span>Agni – The Digestive Fire</span>
          </button>
          {activeTab === "agni" && (
            <div className="agni">
              <p>
                Agni is considered the cornerstone of health in Ayurveda. It's
                responsible for digestion, absorption, and transformation.
              </p>
            </div>
          )}
          <button className="buttons" onClick={() => handleAgniTab("ama")}>
            <span>Ama – Toxins</span>
          </button>
          {activeTab === "ama" && (
            <div className="ama">
              <p>
                Ama represents undigested waste and toxins in the body when
                digestion is weak.
              </p>
            </div>
          )}
          {/* Add more sections: ojas, daily... */}
        </div>
      )}

      {/* Section 4: Practice */}
      {visibleSection === "page4" && (
        <div className="page4">
          <div className="firstdiv">
            <div className="leftdibba">
              <h2 style={{ color: "#e6c20f" }}>Dietary Guidelines</h2>
              <p>Sweet (Madhura)</p>
              <p>Sour (Amla)</p>
              <p>Salty (Lavana)</p>
              <p>Pungent (Katu)</p>
              <p>Bitter (Tikta)</p>
              <p>Astringent (Kashaya)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Learn;
