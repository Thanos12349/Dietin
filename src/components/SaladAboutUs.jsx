import React from "react";
import "../style/SaladAboutUs.css";
import { Link } from "react-router-dom";

const SaladHeroSection = ({ title, visual }) => {
  const btnVisible = Boolean(visual);

  return (
    <section className="salad-about-section">
      <h1 className="text-center py-3 salad-title1">{title}</h1>
      <div className="container salad-container py-4">

        <div className="row align-items-center">

          <div className="col-lg-6 col-md-12 salad-image-col">
            <div className="row g-2">
              <div className="col-6 outter-class">
                <img
                  src="/images/unnamed.jpg"
                  alt="Salad brand story"
                  className="salad-image-fluid salad-rounded salad-shadow-sm"
                />
              </div>
              <div className="col-6 innerclass">
                <div className="mb-2">
                  <img
                    src="/images/saladabout.jpg"
                    alt="Salad preparation"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
                <div>
                  <img
                    src="/images/unnamed (2).jpg"
                    alt="Salad ingredients"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 salad-text-col">
            
            <h3 className="salad-about-title">It all began with a seed</h3>
            <p className="salad-about-text">

              At Dietin, we believe healthy eating should be simple, flexible, and enjoyable. What began with thoughtfully crafted meals has grown into a complete ecosystem designed to fit seamlessly into busy lives.

            </p>
            <p className="salad-about-text">

              From balanced meal plans to tailored programs and quick, accessible options, everything we do is built on one idea health made effortless.

            </p>
            <p className="salad-about-text">

              What sets us apart is the way we combine nutrition, taste, and convenience making wellness a natural part of everyday life.

            </p>
            <p className="salad-about-text">
              Our purpose is clear to build a healthier community, one meal and one choice at a time.
            </p>
            {btnVisible && (
              <Link to="/about">
                <button className="btn1 salad-about-btn ">Our Story</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladHeroSection;
