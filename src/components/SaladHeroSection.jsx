// import React from "react";
// import "../style/SaladHeroSection.css";
// import { Link } from "react-router-dom";

// const SaladHeroSection = () => {
//     return (
//         <>
//             <section className="hero-section1 d-flex align-items-center">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         {/* <div className="col-7 image-section">
//                             <img
//                                 src="/images/saladbanner.png"
//                                 alt="Salad Bowl"
//                                 className="salad-img animate-pizza"
//                             />
//                             <img src="/images/saladleaf.png" alt="Leaf" className="floating leaf" />
//                             <img src="/images/saladshimla.png" alt="Tomato" className="floating tomato" />
//                         </div> */}
//                     <div>
//                         <video src="/video/banner.mp4"></video>
//                     </div>
//                         <div className="col-5 text-section">
//                             <h5 className="sub-title animate-text">The Art & Science of Eating Right</h5>
//                             <h1 className="main-title animate-text">HEALTHY BITES</h1>
//                             <p className="desc animate-text">
//                                 What began as an idea is now India’s go-to destination for nutrition
//                             </p>

//                             {/* <img src="/images/saladleaf.png" alt="Leaf" className="floating leaf" /> */}
//                             {/* <img src="/images/saladshimla.png" alt="Tomato" className="floating tomato1" /> */}
//                             <Link to="/blog">
//                                 <button className="herobtn btn-dark animate-text">ORDER NOW</button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </>
//     );
// };

// export default SaladHeroSection;

import React, { useEffect, useRef } from "react";
import "../style/SaladHeroSection.css";
import { Link } from "react-router-dom";


const SaladHeroSection = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);
  return (
    <section className="dietin-hero">
      {/* <video
        className="dietin-hero-video"
        src="/video/banner.MP4"
        autoPlay
        muted
        loop
        playsInline
      ></video> */}
      <img className="dietin-hero-image" src="/images/imgbanner.JPG" alt="" />
      <div className="dietin-hero-overlay"></div>

      <div className="dietin-hero-content">
        <div className="dietin-hero-move">
          <h5 className="dietin-subtitle">The Art & Science of Eating Right</h5>
          <h1 className="dietin-title">HEALTHY BITES</h1>
          <p className="dietin-desc">
            What began as an idea is now India’s go-to destination for nutrition
          </p>

        </div>

        <Link to="/blog">
          <button className="dietin-btn">ORDER NOW</button>
        </Link>
      </div>
    </section>
  );
};

export default SaladHeroSection;
