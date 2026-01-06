import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../style/SaladTestimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaladTestimonials = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const animateValue = (setter, target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 5;
        setter(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
    };

    animateValue(setHappyCustomers, 10000, 2000);
    animateValue(setAwards, 25, 25);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      name: "Anuj Reddy",
      text: "I’ve been trying to manage my weight without extreme dieting, and DietIn meals fit perfectly into my routine. Clean, balanced, and easy to stick to.",
      img: "/images/veg.png",
    },
    {
      name: "Neha Kapoor",
      text: "The Teriyaki Fish Bowl was perfectly balanced flavourful yet light. The portion was filling without feeling heavy. Definitely ordering again!!",
      img: "/images/veg.png",
    },
    {
      name: "Sarthak Kapadia",
      text: "I didn’t expect a salad to taste this good. The Creamy Quinoa Salad was fresh, satisfying, and actually kept me full for hours.",
      img: "/images/veg.png",
    },
    {
      name: "Reem Sharma",
      text: "DietIn makes healthy eating feel effortless. The meals are fresh, well-prepared, and ideal for everyday busy schedules.",
      img: "/images/veg.png",
    },
  ];

  return (
    <section className="salad-testimonial-section py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 salad-testimonial-stats">
            <h6 className="salad-testimonial-subtitle">Testimonials</h6>
            <h2 className="salad-testimonial-title mb-3">
              Why people choose DietIn
            </h2>
            <p className="salad-testimonial-desc mb-4">
              From wholesome ingredients to tasty, guilt-free options DietIn has won the hearts of thousands who want health without compromise.
            </p>
          
            <div className="salad-testimonial-numbers">
              <div>
                <h3>{happyCustomers}+</h3>
                <p>Smiling Customers</p>
              </div>
              <div>
                <h3>{awards}+</h3>
                <p>Healthy Dishes to Enjoy</p>
              </div>
    
            </div>
          </div>
          <div className="col-lg-8 px-4">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div key={index} className="salad-testimonial-card px-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="salad-testimonial-avatar me-3"
                    />
                    <div>
                      <h5 className="mb-0">{t.name}</h5>
                      <small>{t.role}</small>
                    </div>
                  </div>
                  <p className="salad-testimonial-text">"{t.text}"</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladTestimonials;
