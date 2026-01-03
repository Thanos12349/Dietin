import React from "react";
import { Link } from "react-router-dom";
import "../style/SaladTicket.css";
const SaladTicket = () => {
    const plans = [
        {
            title: "DietIn NutriGrain",
            features: [
                "Personalized millet based nutrition plans tailored to lifestyle and goals.",
                "Building sustainable eating habits through mindful choices."
            ],
            link: "/dietInPlan"
        },
        {
            title: "DietIn Meal",
            features: [
                "Wholesome chef crafted meals designed by dietitians to nourish bodies.",
                "Balanced nutrition delivered fresh making eating simple."],
            link: "/mealPlans"
        },
        {
            title: "DietIn On-The-Go",
            features: [
                "Convenient ready to carry meal options for busy modern lifestyles everyday",
                "Nutritious food made effortless wherever takes you.",
                   ],
            link: "/Home1"
        },
        {
            title: "DietIn Quick Bites",
            features: [
                "Smart, guilt free snacking that keeps you energized between meals.",
                "Small bites, big on taste and nutrition.",
             ],
            link: "/DietinQuickBites"
        }
    ];
    return (
        <>
            <div className="container container-plan my-2">
                <h1 className="ourPlan">Our Plan</h1>
                <div className="row text-center">
                    {plans.map((plan, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <Link to={plan.link} className="text-decoration-none">
                            <div className="card  h-100 shadow">
                                
                                    <div className="card-body meal-plan-card">
                                        <div className="plan-icon ">⭐</div>
                                        <div className="card-title">
                                            <div className="plan-link">{plan.title}</div>
                                                                    </div>
                                    <ul className="list-unstyled text-start text-decoration-none text-white mt-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-2">✔ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                               
                            </div>
                             </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SaladTicket;