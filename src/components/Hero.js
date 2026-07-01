import React from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img/hero.jpg";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-left">

                <h1>
                    Your dream job with
                     <span>JobPilot</span>
                </h1>

                <p>
                    Build ATS-friendly resumes, prepare for interviews,
                    discover matching jobs, and accelerate your career
                    with AI-powered guidance.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                    Get Started
                    </button>

                    <button className="secondary-btn">
                    Explore jobs
                    </button>

                </div>
            </div>

            <div className="hero-right">
                <img src={heroImage} alt="Hero Image" />
            </div>

        </section>
    );
}

export default Hero;