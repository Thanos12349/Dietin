import React from "react";
import "../style/OrderNow.css";
import { Link } from "react-router-dom";

const OrderNow = () => {
  return (
    <div className="order-section container-fluid ">
      <div className="d-flex align-items-center justify-content-center">

        <div className="text-center">
          <img
            src="/images/fresh.png"
            alt="Fresh Salad Bowl"
            className="img-fluid order-image"
          />
        </div>
        <div className=" text-center text-lg-start  mb-lg-0">
          <h2 className="fw-bold order-heading">
            Ready to experience fresh, delicious meals that fit your lifestyle?
          </h2>

          <div className="mt-4 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-center">
            <Link to="/blog" className="discover-btn me-3 px-4 text-black text-decoration-none" >
              ORDER ONLINE
            </Link> </div>
        </div>

        <div className=" text-center">
          <img
            src="/images/order1.png"
            alt="Fresh Salad Bowl"
            className="order-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
