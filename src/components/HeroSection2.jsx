import React from 'react';
import '../style/HeroSection2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = ({image,tittle}) => {
  return (
    <div className="hero-container">
      <div className="container1">
        <img className="hero-image1" src={image} alt="Healthy Meals" />
      </div>

      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
        <div className='background'>
           <h1 className="nurti-text">{tittle}</h1>
        </div>
       
        {/* <p className="your-in">
          Your in-office, intelligent, health-first vending partner offering curated, nutritionist-approved & chef-prepared meals on demand. It’s not just food it’s a commitment to wellbeing.
        </p> */}
      </div>
      {/* <div className='hero-overlay1 d-flex justify-content-center'>
        
      </div> */}
    </div>
  );
};

export default HeroSection;
