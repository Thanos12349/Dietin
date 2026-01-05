import React from 'react';
import '../style/DietinPromise.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaInstagram } from 'react-icons/fa';

const DietinPromise = () => {
  return (
    <div className="promise-container container mt-5">
      {/* Heading */}
      <h2 className="promise-heading mt-4">
        The Dietin Promise
      </h2>

      <div className="row mt-4">
        {/* Left Section */}
        <div className="col-lg-6">
          <p className="promise-description">
            <strong> Healthy meals. Happy teams. Sustainable future. </strong>

            With <strong> Dietin</strong>, workplace wellness is simple, scalable, and impactful.

          </p>

          {/* Contact Section */}
          <div className="promise-contact mt-4">
            <p>
              <FaPhoneAlt className="promise-icon" />
              <a href="tel:+919422799922" className="contact-link">
                +91 9422799922
              </a>
            </p>

            <p>
              <FaEnvelope className="promise-icon" />
              <a href="mailto:dietin.team@fdhsnet.com" className="contact-link">
                dietin.team@fdhsnet.com
              </a>
            </p>

            <p>
              <FaGlobe className="promise-icon" /> {' '}
              <a href="https://www.dietin.in" target="_blank" rel="noreferrer">
                www.dietin.in
              </a>
            </p>
            <p>
              <FaInstagram className="promise-icon" />{' '}
              <a
                href="https://www.instagram.com/dietin.heal?igsh=MXprYWR5d3NvcWJq"
                target="_blank"
                rel="noreferrer"
              >
                dietin.heal
              </a>
            </p>
          </div>

          {/* Ticket Section */}
          {/* <div className="promise-ticket mt-4 p-3">
            <h5>🎟️ DIETIN ON THE GO TICKET</h5>
            <p>Experience wellness made simple, anytime, anywhere.</p>
          </div> */}
        </div>

        {/* Right Section with Image */}
        <div className="col-lg-6 text-center py-2">
          <img
            src="./images/unnamed (5).jpg"
            alt="Dietin Promise"
            className="promise-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default DietinPromise;
