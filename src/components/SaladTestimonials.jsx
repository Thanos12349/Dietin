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
      name: "Jaswant Brar",
      text: "Finally, the scale is moving! Down from 78.2 kg and feeling more motivated than ever. Loved the oats roti and sabzi! I was honestly stunned that even oats roti could taste this good!",
      img: "/images/veg.png",
    },
    {
      name: "Neha Kapoor",
      text: "Never thought healthy food could be this satisfying! The quinoa pulao was light yet so flavorful no more boring diet meals for me.",
      img: "/images/veg.png",
    },
    {
      name: "Arjun Mehta",
      text: "In just two weeks, I feel lighter and more energetic. The customized meal plan fits perfectly into my routineno cravings, no compromises!",
      img: "/images/veg.png",
    },
    {
      name: "Radhika Sharma",
      text: "I was worried about missing my favorite comfort food, but Dietin’s millet-based parathas are a game changer! Healthy, filling, and super tasty.",
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
