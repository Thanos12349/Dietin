import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ImagePdfPage.css"; 

export default function ImagePdfPage() {
  const [activePlan, setActivePlan] = useState(null);

  const handleClick = (plan) => {
    setActivePlan(plan);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-center text-center my-4">
          <div className="col-md-4 mb-3">
            <div
              className={`plan-card bg1 ${activePlan === "1" ? "active" : ""}`}
              onClick={() => handleClick("1")}
            >
              <div className="overlay">
                <h2 className="text-light" >1 MONTH</h2>
                <h4>Book Your Consulation</h4>
                <p>Includes all taxes,T&c applied*</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div
              className={`plan-card bg2 ${activePlan === "3" ? "active" : ""}`}
              onClick={() => handleClick("3")}
            >
              <div className="overlay">
                <h2 className="text-light">3 MONTHS</h2>
                <h4>Book Your Consulation</h4>
                <p>Includes all taxes,T&c applied*</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div
              className={`plan-card bg3 ${activePlan === "6" ? "active" : ""}`}
              onClick={() => handleClick("6")}
            >
              <div className="overlay">
                <h2 className="text-light">6 MONTHS</h2>
                <h4>Book Your Consulation</h4>
                <p>Includes all taxes,T&c applied*</p>
              </div>
            </div>
          </div>
        </div>

        <div className="plans-content text-center py-4">
          {activePlan === "1" && (
            <div className=" plan-card1 bg6">
              <h1 className="text-white">1 Month Plan</h1>
              <p> Start fresh, balance the
                body,. <br />
                Build healthy habits. <br />
                Basic detox and
                metabolism therapy. <br />
                4 counseling with
                dietician 1 session with
                head dietician. <br />
                Access to new and
                innovative recipes. <br />
                Relationship manager
                support</p>
            </div>
          )}
          {activePlan === "3" && (
            <div className="plan-card1 bg4">
              <h3 className="text-white">3 Month Plan</h3>
              <p className="text-blue"> Deeper correction, hormonal
                balance, visible result
                (therapeutic activation). <br />
                Hormonal harmony Anti
                inflammatory and immune
                nutrition. <br />
                12 counseling with dietician 3
                session with head dietician <br />
                Access to yogic and physical
                routine . <br />
                Testing partner with 108 blood
                tests. <br />
                Smart scale with 12
                parameters <br />
                Access to new and innovative
                recipes Relationship manager
                support</p>
            </div>
          )}
          {activePlan === "6" && (
            <div className=" plan-card1 bg5">
              <h3 className="text-white">6 Month Plan</h3>
              <p className=" mx-auto">
                Long term change, deep healing,
                confidence from inside out. <br />
                Organ strengthening and holistic
                wellbeing  <br />
                Hormonal synchronisation <br />
                Exclusive hair, skin and bone
                content. <br />
                24 counseling with dietician 6
                sessions with head dietician <br />
                Access to yogic and physical
                routine. <br />
                Testing partner with 108 blood
                tests. <br />
                Smart scale with 12 parameters. <br />
                Access to new and innovative
                recipes Relationship manager
                support
              </p>
            </div>
          )}
        </div>
        <div className="text-center py-5">
          <a href="/sample.pdf" download className="btn1 btn-success btn-lg">
            📄 Download PDF
          </a>
        </div>

        <Footer />
      </div>
    </>
  );
}
