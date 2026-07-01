import React from "react";
import "../styles/Statistics.css";

function Statistics() {

    const stats = [

        {
            number: "10K+",
            title: "Active Users"
        },

        {
            number: "5K+",
            title: "Resumes Created"
        },

        {
            number: "1K+",
            title: "Jobs Posted"
        },

        {
            number: "95%",
            title: "Success Rate"
        }

    ];

    return (

        <section className="statistics">

            <h2>Trusted by Thousands of Professionals</h2>

            <p>
                Helping job seekers achieve their career goals with AI-powered tools.
            </p>

            <div className="stats-grid">

                {
                    stats.map((stat, index) => (

                        <div className="stat-card" key={index}>

                            <h1>{stat.number}</h1>

                            <h3>{stat.title}</h3>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default Statistics;