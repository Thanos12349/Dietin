import React from 'react';
import { FaLeaf, FaBlender, FaBreadSlice, FaTint, FaAppleAlt } from "react-icons/fa";
import '../style/DietinHowItWorks.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const DietinHowItWorks = () => {
  return (
    <div className="howit-container container mt-5">
      <h2 className="main-heading">The Mealogy Club Chiller: How It Works</h2>
      <p className="tagline">Our smart vending fridge is designed to deliver fresh,
        nutritious meals on demand:</p>

      <div className="row mt-4 align-items-start">

        <div className="col-md-12 gap-5 py-2">
          <ul className="steps-list py-2">
            <li><strong>Daily Restocked Meals</strong> – Always fresh, always safe</li>
            <li><strong>15+ Healthy Options in Each Category – </strong> High Protein,
              Low GI, Detox, Millet-based, Seasonal</li>
            <li><strong>Chef-Crafted, Nutritionist-Designed </strong>  – Balanced meals
              with no artificial preservatives</li>
            <li><strong>Touchless, Zero-Contact Interface –</strong> Tap, Taste, Thrive</li>
            <li><strong> IoT Enabled Monitoring –</strong>  For food safety, freshness, and
              restocking efficiency</li>
            <li><strong> Temperature-Controlled & Sanitized</strong>  – Ensuring food
              stays safe and hygienic
            </li>
          </ul>
        </div>
        <h2 className='title1 py-2'>Categories include:</h2>
        <div className="categories">
          <div className="categories-child">
            <FaLeaf className="category-icon" />
            <h4>Salads</h4>
          </div>

          <div className="categories-child">
            <FaBlender className="category-icon" />
            <h4>Smoothies</h4>
          </div>

          <div className="categories-child">
            <FaBreadSlice className="category-icon" />
            <h4>Sandwiches</h4>
          </div>

          <div className="categories-child">
            <FaTint className="category-icon" />
            <h4>Detox Water</h4>
          </div>

          <div className="categories-child">
            <FaAppleAlt className="category-icon" />
            <h4>Fruit Bowls</h4>
          </div>
        </div></div>
    </div>
  );
};

export default DietinHowItWorks;
