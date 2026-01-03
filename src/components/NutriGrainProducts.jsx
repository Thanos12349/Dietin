import React from "react";
import "../style/NutriGrainProducts.css";

const NutriGrainProducts = () => {
  return (
    <section className="dietin-products-section">
      <div className="dietin-products-container">

        <h2 className="dietin-products-title">
          Dietin NutriGrain
        </h2>

        <p className="dietin-products-subtitle">
          Smart millet based foods designed for modern lifestyles
        </p>

        <div className="dietin-products-grid">

          {/* Millet Namkeen */}
          <div className="dietin-product-card">
            <h3 className="dietin-product-name">
              Millet Namkeen (Ready to Eat)
            </h3>

            <p className="dietin-product-desc">
              Light, crunchy, and flavour packed millet based savoury snacks,
              perfect for guilt free snacking.
            </p>

            <ul className="dietin-product-list">
              <li>Peri Peri Millet Namkeen</li>
              <li>Classic Masala Millet Namkeen</li>
              <li>Tangy Herb Millet Namkeen</li>
            </ul>
          </div>

          {/* Millet Cookies */}
          <div className="dietin-product-card">
            <h3 className="dietin-product-name">
              Millet Cookies
            </h3>

            <p className="dietin-product-desc">
              Wholesome millet based cookies made for everyday enjoyment
              crispy, satisfying, and balanced.
            </p>

            <ul className="dietin-product-list">
              <li>Ideal for tea-time and mid day hunger</li>
              <li>Perfect for on-the-go snacking</li>
              <li>A smarter alternative to refined flour snacks</li>
            </ul>
          </div>

          {/* Millet Pasta */}
          <div className="dietin-product-card">
            <h3 className="dietin-product-name">
              Ready to Eat Millet Pasta
            </h3>

            <p className="dietin-product-desc">
              Comfort food made healthy millet-based pasta that is quick,
              filling, and nourishing.
            </p>

            <ul className="dietin-product-list">
              <li>High fiber, easy-to-digest grains</li>
              <li>Perfect for busy schedules</li>
              <li>Quick and satisfying meals</li>
            </ul>
          </div>

          {/* Millet Noodles */}
          <div className="dietin-product-card">
            <h3 className="dietin-product-name">
              Ready to Eat Millet Noodles
            </h3>

            <p className="dietin-product-desc">
              A healthier twist on everyday noodles made with millet goodness
              and crafted for convenience.
            </p>

            <ul className="dietin-product-list">
              <li>Light yet satisfying</li>
              <li>Quick lunches and dinners</li>
              <li>Ideal for snack meals</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NutriGrainProducts;
