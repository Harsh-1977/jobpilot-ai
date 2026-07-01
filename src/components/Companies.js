import React from "react";
import "../styles/Companies.css";

function Companies() {
    
    const companies = [
        "Google",
        "Microsoft",
        "Amazon",
        "Facebook",
        "Apple",
        "Netflix",
        "Tesla",
        "Adobe"
    ];

    return (
        <section className="companies">
            <h2>Trusted by 10,000+ Job Seekers</h2>

            <div className="comany-grid">
                {
                    companies.map((company, index) => (

                        <div className = "company-card" key = { index }>
                            <p>{company}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Companies;