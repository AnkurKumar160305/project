import React, { useState } from "react";
import "../Symptoms.css";

const symptomsList = [
  "Fatigue", "Sleep Issues", "Digestive Problems", "Stress", "Anxiety", "Headaches",
  "Joint Pain", "Skin Issues", "Hair Fall", "Weight Gain", "Low Energy", "Mood Swings",
  "Concentration Issues", "Back Pain", "Bloating", "Constipation", "Irregular Periods", "Cold Hands/Feet"
];

export default function SymptomsForm() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [description, setDescription] = useState("");

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    if (description.trim() || selectedSymptoms.length > 0) {
      const submission = {
        symptoms: selectedSymptoms,
        description: description.trim(),
      };
      console.log("Submitted:", submission);
      alert("Check console for submitted data.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto font-sans">
      <header className="text-center mb-6">
        <img src="./images/like.png" alt="heart" className="mx-auto w-10" />
        <h1 className="text-2xl font-bold mt-4">Share Your Health Concerns</h1>
        <p className="text-gray-600 mt-2">
          Describe your symptoms or health goals in your own words. Our AI will analyze them through an Ayurvedic lens.
        </p>
      </header>

      <main>
        <div className="mb-4">
          <div className="flex items-center gap-2 text-orange-600 font-medium mb-1">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5a3 3 0 1 0-5.997.125..." /> {/* Truncated SVG */}
            </svg>
            <p>Describe Your Symptoms</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Be as detailed as possible. Include how you feel physically, mentally, and emotionally.
          </p>
        </div>

        <textarea
          className="w-full border rounded p-3 mb-4 outline-none transition duration-200"
          style={{
            borderColor: description.trim() ? "orange" : "#c4d1c4",
          }}
          placeholder="For example: I've been feeling very tired lately..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <p className="font-medium mb-2">Or select common symptoms (optional)</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {symptomsList.map((symptom) => (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              className={`px-3 py-1 rounded-full border transition duration-200 ${
                selectedSymptoms.includes(symptom)
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>

        <button
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!description.trim() && selectedSymptoms.length === 0}
        >
          <img src="./images/paper-airplane.png" alt="submit" className="w-5" />
          Get Personalized Recommendations
        </button>
      </main>
    </div>
  );
}
