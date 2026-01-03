import React from "react";
import "./DietinQuickBites.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const DietinQuickBites = () => {
  return (
    <>
      <Header />

      <div className="quickbites-container container mt-5">

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="main-heading">
            Dietin – <span className="highlight">Quick Bites</span>
          </h2>
          <h5 className="subtitle">
            Healthy Eating, Made Simple • Now Live on{" "}
            <span className="brand">Swiggy</span> &{" "}
            <span className="brand">Zomato</span>
          </h5>
        </div>

        {/* Intro */}
        <div className="quickbites-content d-flex align-items-center">
          <div className="text-content">
            <p className="description">
              Healthy food should be easy, delicious, and accessible  not a compromise.
              At <strong>Dietin  Quick Bites</strong>, we bring clean, balanced meals to you
              with the same ease as ordering fast food, without sacrificing nutrition or taste.
            </p>

            <p className="description">
              In a fast-paced lifestyle where unhealthy choices feel easier, Quick Bites by Dietin
              delivers wholesome, diet friendly meals straight to your doorstep perfect for
              home, work, or life on the go.
            </p>

            <p className="description">
              What began as an in house wellness initiative for our team has now evolved into
              a nutrition-first food movement for everyone.
            </p>
          </div>

          <div className="text-center quickbites">
            <img
              src="./images/unnamed (3).jpg"
              alt="Quick Bites by Dietin"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Announcement */}
        <div className="highlight-box my-4 p-3 text-center">
          <h5>
            🚀 Now ordering healthy meals is easier than ever available on Swiggy & Zomato
          </h5>
        </div>

        {/* Why Choose */}
        <div className="whychoosequick">
          <div className="whychoosequick-left">
            <div className="section-title">
              Why Choose Quick Bites by Dietin?
            </div>

            <ul className="info-list">
              <li>
                <strong>Healthy + Convenient –</strong> Clean, nourishing meals delivered in just a few clicks.
              </li>
              <li>
                <strong>Balanced Nutrition –</strong> Every dish includes the right mix of proteins,
                carbs, healthy fats, vitamins, and minerals.
              </li>
              <li>
                <strong>Pocket Friendly Pricing –</strong> Healthy food that fits your lifestyle and budget.
              </li>
              <li>
                <strong>Delicious Variety </strong> From energizing breakfasts to satisfying lunches
                and light dinners, there’s something for everyone.
              </li>
              <li>
                <strong>Personalized Diet Plans –</strong> Expert designed meals for fitness goals,
                weight management, recovery, or everyday wellness.
              </li>
            </ul>
          </div>

          <div className="whychoosequick-right">
            <div className="whychoosequick">
              <img
                src="./images/unnamed (1).jpg"
                alt="Healthy Salads"
                className="img-fluid rounded"
              />
              <img
                src="./images/quickbitesdele.png"
                alt="Dietin Meals"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>

        {/* Menu */}
        <h3 className="section-title">What’s on the Menu?</h3>
        <ul className="info-list">
          <li>🥗 Fresh & filling healthy salads</li>
          <li>🍱 Balanced daily meals</li>
          <li>💪 High-protein & calorie-smart options</li>
          <li>🍛 Comfort food made clean & nutritious</li>
        </ul>
        <p className="fw-bold">
          Eat smart. Feel energized. Stay consistent.
        </p>

        {/* How to Order */}
        <h3 className="section-title">How to Order</h3>
        <ol className="order-steps">
          <li>Open the Swiggy or Zomato app</li>
          <li>Search for <strong>“Quick Bites by Dietin”</strong></li>
          <li>Browse our healthy, diet-friendly menu</li>
          <li>Place your order & enjoy fresh meals at home</li>
        </ol>
        <p className="description">
          No cooking. No planning. No stress.
        </p>

        {/* Who It's For */}
        <h3 className="section-title">Who Is Quick Bites Perfect For?</h3>
        <div className="row mt-3">
          <div className="col-md-6">
            <ul className="info-list">
              <li><strong>Working Professionals –</strong> Stay focused and productive.</li>
              <li><strong>Fitness Enthusiasts –</strong> Fuel workouts with performance-friendly food.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="info-list">
              <li><strong>Families –</strong> Wholesome meals your loved ones can enjoy daily.</li>
              <li><strong>Health-Focused Individuals –</strong> Eat clean without effort.</li>
            </ul>
          </div>
        </div>

        {/* Promise */}
        <div className="promise-box mt-5 p-4">
          <h4 className="promise-heading">Our Promise 💚</h4>
          <p>
            With <strong>Quick Bites by Dietin</strong>, we’re not just delivering food
            we’re delivering health, balance, and care.
            Our partnership with <span className="brand">Swiggy</span> and{" "}
            <span className="brand">Zomato</span> ensures healthy food is now
            as easy to order as fast food.
          </p>

          <p className="fw-bold text-center">
            Eat Right. Live Better.  
            <br />
            Because when nutrition becomes simple, wellness becomes a way of life.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DietinQuickBites;
