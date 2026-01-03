import React from "react";
import "../style/WhyMilletsMatter.css";

const WhyMilletsMatter = () => {
  return (
    <section className="dietin-milletmatter-section">
      <div className="dietin-milletmatter-container">
        
        <h2 className="dietin-milletmatter-title">
          Why Millets Matter
        </h2>

        <p className="dietin-milletmatter-intro">
          Millets are naturally rich in fiber, plant protein, essential minerals,
          and slow-release carbohydrates, making them one of the healthiest grain
          choices today.
        </p>

        {/* Key Benefits */}
        <div className="dietin-milletmatter-block">
          <h3 className="dietin-milletmatter-subtitle">
            Key Benefits of Millets
          </h3>

          <ul className="dietin-milletmatter-list">
            <li>Supports sustained energy without sugar spikes</li>
            <li>High in dietary fiber for better digestion</li>
            <li>Naturally gluten-free and easy to digest</li>
            <li>
              Low glycaemic index, suitable for active and health-conscious
              lifestyles
            </li>
            <li>
              Environment-friendly grains requiring less water and resources
            </li>
          </ul>
        </div>

        <p className="dietin-milletmatter-note">
          With growing lifestyle-related health concerns, millets offer a smart,
          sustainable alternative to refined grains.
        </p>

        {/* Advantage Section */}
        <div className="dietin-milletmatter-advantage">
          <h3 className="dietin-milletmatter-subtitle">
            The Dietin NutriGrain Advantage
          </h3>

          <ul className="dietin-milletmatter-list">
            <li>Made from carefully selected millet varieties</li>
            <li>No artificial preservatives</li>
            <li>Clean, balanced formulations for everyday consumption</li>
            <li>
              Designed for convenience without compromising nutrition
            </li>
            <li>
              Suitable for workplaces, homes, vending, and retail
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhyMilletsMatter;
