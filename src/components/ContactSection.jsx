import React from "react";
import { FaEnvelope, FaMapMarkerAlt,FaPhone } from "react-icons/fa";
import "../style/ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contact-section text-center py-5">
            <div className="container">
                <h2 className="callUs">Reach out — your healthy journey starts here.</h2>

                <div className="row justify-content-center">

                    <div className="col-12 col-md-4 mb-4">
                        <div className="contact-card">
                            <FaEnvelope className="contact-icon" />
                            <h5 className="fw-bold mt-3">General Enquiry</h5>
                            <p>
                                <a href="mailto:contactus@yoursmartphysician.com">dietin.team@fdhsnet.com</a>
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="contact-card">
                            <FaEnvelope className="contact-icon" />
                            <h5 className="fw-bold mt-3">For Franchise Enquiry</h5>
                            <p>
                                {/* <a href="mailto:service@salado.in"></a> */}
                                Coming Soon
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-4">
                        <div className="contact-card">
                            <FaPhone className="contact-icon" />
                            <h5 className="fw-bold mt-3">For Support Enquiry</h5>
                            <p>
                                <a href="tel:+917838400384">+91 9422799922</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-8">
                        <div className="contact-card">
                            <FaMapMarkerAlt className="contact-icon" />
                            <h5 className="fw-bold mt-3">Address</h5>
                            <p>
                                F-2599 Pocket F Sector 2, Palam Vihar Gurgaon, Haryana Pincode: -122017, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
