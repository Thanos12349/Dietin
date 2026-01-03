import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderNow from "../components/OrderNow";
import DietinTicket from "../components/SaladTicket";

const DietInSolution = () => {
    return (
        <>
            <Header />
            <DietinTicket />
            <OrderNow />
            <Footer />
        </>

    );
};
export default DietInSolution;