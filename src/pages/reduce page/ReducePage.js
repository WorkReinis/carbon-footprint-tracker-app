import React from "react";
import "./styles/ReducePage.css";


function ReducePage() {
  const suggestions = [
    { id: 1, text: "Use public transportation instead of driving", emissionSaved: "2.3 kg CO₂/day" },
    { id: 2, text: "Switch to energy-efficient LED lighting", emissionSaved: "0.5 kg CO₂/day" },
    { id: 3, text: "Reduce meat consumption to once a week", emissionSaved: "3.5 kg CO₂/day" },
  ];

  const offsets = [
    { id: 1, project: "Plant Trees in Amazon Rainforest", cost: "$10/month" },
    { id: 2, project: "Wind Energy Project in India", cost: "$15/month" },
    { id: 3, project: "Solar Energy in Africa", cost: "$20/month" },
  ];

  return (
    <div className="suggestions-page">
      <header className="header">
        <h1 className="header-title">Take Action for a Greener Planet</h1>
        <p className="header-subtitle">Discover ways to reduce your carbon footprint and contribute to offset projects</p>
      </header>

      <section className="suggestions-section">
        <h2>Personalized Suggestions</h2>
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id} className="suggestion-item">
              <p>{suggestion.text}</p>
              <span className="emission-saved">Saves: {suggestion.emissionSaved}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="offsets-section">
        <h2>Carbon Offset Projects</h2>
        <ul>
          {offsets.map((offset) => (
            <li key={offset.id} className="offset-item">
              <p>{offset.project}</p>
              <span className="offset-cost">{offset.cost}</span>
              <button className="offset-button">Contribute</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};


export default ReducePage;