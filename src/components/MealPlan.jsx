import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/MealPlan.css";
import { Link } from "react-router-dom";
import studentImg from "/images/student.png";
import Table from "/images/table1.png";
import Pre from "/images/pre.png";
import Meal1 from "/images/meal1.png";
import We from "/images/we.png"
import We1 from "/images/we1.png"


const MealPlans = () => {
  const plans = [
    {
      title: "STUDENT MEAL PLAN",
      image: studentImg,
      link:"/TherapeuticPlan3"
    },
    {
      title: "FAST TRACK WEIGHT LOSS",
      image: Meal1,
      link:"/TherapeuticPlan4"
    },
    {
      title: "GYM AND SPORTS PLAN",
      image: Table,
      link:"/TherapeuticPlan2"
    },
    {
      title: "PREGNANCY & LACTATION PLAN",
      image: Pre,
      link:"/TherapeuticPlan1"
    },
    {
      title: "THERAPEUTIC PLANS",
      image: We,
      link:"/TherapeuticPlan"
    },
    {
      title: "WEIGHT MANAGEMENT PLAN",
      image: We1,
      link:"/TherapeuticPlan5"
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-dark fw-bold">
            <span className="text-primary1">Choose Your Perfect Plan</span>
          </h2>
          <p className="text-secondary">
            We offer 8 signature meal plans designed for every phase of life and every goal
          </p>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={plan.image} alt={plan.title} className="card-img" />
                    <div className="overlay">
                      <h5 className="text-white text-center">{plan.title}</h5>
                    </div>
                  </div>
                  <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                    <h5>{plan.title}</h5>
                    <Link to={plan.link} className="btn btn-success mt-3">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MealPlans;
