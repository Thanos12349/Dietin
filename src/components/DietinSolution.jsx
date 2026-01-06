import React from 'react';
import '../style/DietinSolution.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DietinSolution = () => {
  return (
    <div className="solution-container container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="section-title">Your Team Will Love It</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><strong>Boost Productivity & Focus</strong> – more energy, less fatigue</li>
              <li><strong>Reduce Absenteeism</strong> – healthier employees, fewer sick days</li>
              <li><strong>24/7 Access</strong> – meals anytime, anywhere</li>
              <li><strong>Zero Operations Hassle</strong> – we restock, sanitize, and maintain</li>
              <li><strong>Sustainable & CSR-Friendly</strong> – circular system for jars & bottles</li>
            </ul>
          </div>

          {/* How It Works */}
          <h3 className="section-title">How It Works – 3 Easy Steps</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><strong>Tap & Browse</strong> – intuitive touchscreen navigation</li>
              <li><strong>Choose Your Meal</strong> – full nutrition info at your fingertips</li>
              <li><strong>Grab & Go</strong> – pay via UPI or card, instantly vended</li>
            </ul>
          </div>

          {/* What’s Inside */}
          <h3 className="section-title">What’s Inside the DIETIN Chiller</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><strong>15+ Healthy Options Daily</strong> – salads, smoothies, detox water, sandwiches & fruit bowls</li>
              <li><strong>Chef-Crafted & Nutritionist Approved</strong> – balanced meals, zero preservatives</li>
              <li><strong>IoT Enabled & Touchless</strong> – safe, fresh & hassle-free access</li>
              <li><strong>Temperature Controlled & Sanitized</strong> – food safety guaranteed</li>
            </ul>
          </div>

          {/* Sustainability */}
          <h3 className="section-title">Sustainability Made Simple</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li>Return jars/bottles</li>
              <li>Earn reward points</li>
              <li>Redeem for meals, discounts & perks</li>
            </ul>
            <p className="fw-bold">Eat Well. Return Smart. Repeat.</p>
          </div>

          {/* Easy Setup */}
          <h3 className="section-title">Easy Setup – Minimal Footprint</h3>
          <div className="info-box card shadow-sm p-3 mb-4">
            <ul>
              <li><strong>Space:</strong> 1 sq. m. in cafeteria or common area</li>
              <li><strong>Power:</strong> One 220V plug point</li>
              <li><strong>Access:</strong> Daily restocking & maintenance entry</li>
            </ul>
          </div>

        </div>
        <div className='Dietin-img-wrapper col-lg-6'>
          <img className='Dietin-img' src="/images/08.jpg" alt="" />
          {/* <img className='Dietin-img' src="/images/07.jpg" alt="" /> */}

        </div>
      </div>
    </div>
  );
};

export default DietinSolution;
