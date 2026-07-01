import React from "react";
import {
    FaUserPlus,
    FaFileAlt,
    FaRobot,
    FaBriefcase
} from "react-icons/fa";

import "../styles/HowItWorks.css";

function HowItWorks() {

    const steps = [

        {
            icon: <FaUserPlus />,
            title: "Create Account",
            description: "Sign up and complete your profile."
        },

        {
            icon: <FaFileAlt />,
            title: "Build Resume",
            description: "Create a professional ATS-friendly resume."
        },

        {
            icon: <FaRobot />,
            title: "AI Analysis",
            description: "Analyze your resume and get AI suggestions."
        },

        {
            icon: <FaBriefcase />,
            title: "Apply Jobs",
            description: "Apply for jobs recommended by AI."
        }

    ];

    return (

        <section className="how-it-works">

            <h2>How JobPilot AI Works</h2>

            <p className="how-subtitle">
                Get your dream job in just four simple steps.
            </p>

            <div className="steps-container">

                {
                    steps.map((step, index) => (

                        <div className="step-card" key={index}>

                            <div className="step-number">
                                {index + 1}
                            </div>

                            <div className="step-icon">
                                {step.icon}
                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    ))
                }

            </div>

        </section>

    );
}

export default HowItWorks;