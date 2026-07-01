import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/CTA.css";

function CTA() {
    return (
        <section className="cta-section">
            <div className="cta-container">

                <span className="cta-badge">
                    🚀 Start Your Career Journey
                </span>

                <h2>
                    Ready to Land Your <span>Dream Job?</span>
                </h2>

                <p>
                    Build ATS-friendly resumes, practice AI interviews,
                    and discover better job opportunities with JobPilot AI.
                </p>

                <div className="cta-buttons">
                    <Link to="/register" className="primary-btn">
                        Get Started
                    </Link>

                    <Link to="/about" className="secondary-btn">
                        Learn More
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default CTA;