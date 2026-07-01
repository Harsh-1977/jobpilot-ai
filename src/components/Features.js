import React from "react";
import {
    FaFileAlt,
    FaChartLine,
    FaRobot,
    FaBriefcase,
    FaEnvelope,
    FaRoute
} from "react-icons/fa";

import "../styles/Features.css";

function Features() {

    const features = [

        {
            icon: <FaFileAlt />,
            title: "Resume Builder",
            description:
                "Create professional ATS-friendly resumes in minutes."
        },

        {
            icon: <FaChartLine />,
            title: "Resume Analyzer",
            description:
                "Analyze your resume and improve your ATS score."
        },

        {
            icon: <FaRobot />,
            title: "AI Interview",
            description:
                "Practice interviews with AI and receive instant feedback."
        },

        {
            icon: <FaBriefcase />,
            title: "Job Recommendation",
            description:
                "Get personalized job suggestions based on your skills."
        },

        {
            icon: <FaEnvelope />,
            title: "Cover Letter",
            description:
                "Generate professional cover letters instantly."
        },

        {
            icon: <FaRoute />,
            title: "Career Roadmap",
            description:
                "Receive a personalized learning roadmap from AI."
        }

    ];

    return (

        <section className="features">

            <h2>Why Choose JobPilot AI?</h2>

            <p className="feature-subtitle">
                Powerful AI tools to help you land your dream job faster.
            </p>

            <div className="feature-grid">

                {features.map((feature, index) => (

                    <div className="feature-card" key={index}>

                        <div className="feature-icon">
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Features;