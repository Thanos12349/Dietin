import React from 'react';
import '../style/DietInExeccutive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeartbeat, FaAppleAlt, FaChartLine, FaHospitalUser } from 'react-icons/fa';

const DietinExecutive = () => {
  return (
    <div className="dietin-container container mt-5">
      {/* Title Section */}
      <div className="executive-title text-center mt-4">
        <h2>
          <span className="highlight">Dietin – Wellness On Demand</span>
        </h2>
        <h5>
          <strong>Smart Vending for Smart Workplaces</strong>
        </h5>
        <h6>
          <strong>
            Healthy food Anytime Anywhere. 
          </strong>
        </h6>
      </div>

      {/* Intro Description */}
      <p className="description mt-4 text-center">
       Transform your workplace with the Dietin Mealogy Club Chiller an IoT enabled smart fridge delivering fresh, chef-crafted, nutritionist-approved meals right to your team. </p>

     

      {/* Section Heading */}
      <h3 className="text-center mt-5">Why Your Team Needs Dietin </h3>

      {/* Stats Row */}
      <div className="stats-row row text-center mt-4 g-3">
        <div className="col-md-3">
          <div className="stat-box">
            <FaAppleAlt className="stat-icon" />
            <h4>73%</h4>
            <span>of professionals skip breakfast</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaHeartbeat className="stat-icon" />
            <h4>60%</h4>
            <span>rely on junk food at work</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaHospitalUser className="stat-icon" />
            <h4>83%</h4>
            <span>of HR leaders prioritize wellness</span>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-box">
            <FaChartLine className="stat-icon" />
            <h4>18%</h4>
            <span>rise in healthcare costs from lifestyle diseases</span>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <p className="performance-note text-center mt-5">
        <strong>
          Dietin makes workplace wellness effortless no extra ops, no canteen dependency, just healthy meals on demand. 
        </strong>
      </p>
    </div>
  );
};

export default DietinExecutive;
