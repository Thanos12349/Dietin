import React from 'react';
import '../style/DietinCxoLove.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DietinCxoLove = () => {
  return (
    <div className="cxo-container container mt-5">
      <h2 className="cxo-heading mt-3">
        Dietin – <span className="highlight">Wellness On Demand</span>
      </h2>
      <p className="cxo-subheading">Smart Vending for Smarter Workplaces</p>

      <div className="row mt-4 gx-5 align-items-start">
        <div className="col-lg-7 col-md-12">
          <p className="cxo-description">
            The <strong>Dietin Mealogy Club Chiller</strong> is an IoT-enabled smart fridge bringing fresh, nutritious meals directly to corporates, gyms, and institutions.
          </p>

          <div className="cxo-section mt-4">
            <h4 className="cxo-title">Why It Matters</h4>
            <ul className="cxo-list">
              <li>73% of professionals skip breakfast</li>
              <li>60% rely on junk food at work</li>
              <li>83% of HR leaders prioritize wellness</li>
              <li>18% rise in healthcare costs from lifestyle diseases</li>
            </ul>
          </div>

          <div className="cxo-section mt-4">
            <h4 className="cxo-title">How It Works</h4>
            <ul className="cxo-list">
              <li>Daily restocked meals – safe & fresh</li>
              <li>15+ healthy options: salads, smoothies, sandwiches, detox water, fruit bowls</li>
              <li>IoT monitoring + touchless vending</li>
              <li>Tech-enabled ordering & flexible subscriptions</li>
            </ul>
          </div>
          <div className="cxo-section mt-4">
            <h4 className="cxo-title">Organizational Benefits</h4>
            <ul className="cxo-list">
              <li>Healthier, more productive teams</li>
              <li>Zero ops burden – we manage everything</li>
              <li>Sustainable, plant-based, and CSR-aligned</li>
              <li>24/7 access, no canteen dependency</li>
            </ul>
          </div>

          <div className="cxo-section mt-4">
            <h4 className="cxo-title">Setup Needs</h4>
            <ul className="cxo-list">
              <li>1 sq. m. space + 220V plug</li>
              <li>Daily access for restocking</li>
            </ul>
          </div>

          <div className="cxo-section mt-4">
            <h4 className="cxo-title">Sustainability Loop</h4>
            <p>
              Return jars → <strong>Earn reward points</strong> → Redeem for free meals or perks
            </p>
          </div>

          <div className="cxo-section mt-4">
            <h4 className="cxo-title">The Promise</h4>
            <p>
              With Dietin, <strong>nutrition-first living</strong> becomes simple, scalable, and sustainable.
            </p>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 text-center">
          <img
            src="./images/frdggrl.PNG"
            alt="Dietin Wellness On Demand"
            className="rounded cxo-img mt-3 mt-lg-0 img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default DietinCxoLove;
