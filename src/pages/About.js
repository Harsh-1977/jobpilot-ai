import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from "../assets/img/about.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About JobPilot AI</h1>
          <p>
            Empowering students and professionals with AI-powered career tools
            to build ATS-friendly resumes, prepare for interviews, and land
            their dream jobs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-image">
            <img src={about} alt="About"
            />
          </div>

          <div className="about-content">
            <h2>Who We Are</h2>

            <p>
              JobPilot AI is a modern career platform that combines Artificial
              Intelligence with job search tools to help users build professional
              resumes, analyze ATS scores, prepare for interviews, and discover
              better job opportunities.
            </p>

            <p>
              Our mission is to make career growth easier for students,
              freshers, and professionals through intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container mission-grid">

          <div className="card">
            <h2>🎯 Our Mission</h2>
            <p>
              To empower every job seeker with AI-driven tools that simplify
              career growth and improve hiring success.
            </p>
          </div>

          <div className="card">
            <h2>🚀 Our Vision</h2>
            <p>
              To become the most trusted AI-powered career platform helping
              millions of professionals achieve their dream careers.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why Choose JobPilot AI?</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>📄 Resume Builder</h3>
              <p>Create ATS-friendly resumes in minutes.</p>
            </div>

            <div className="feature-card">
              <h3>🤖 AI Resume Analysis</h3>
              <p>Get ATS score and improvement suggestions instantly.</p>
            </div>

            <div className="feature-card">
              <h3>🎤 AI Interview</h3>
              <p>Practice HR and technical interviews with AI.</p>
            </div>

            <div className="feature-card">
              <h3>💼 Job Recommendations</h3>
              <p>Discover jobs that match your skills.</p>
            </div>

            <div className="feature-card">
              <h3>✉ Cover Letter</h3>
              <p>Generate professional cover letters using AI.</p>
            </div>

            <div className="feature-card">
              <h3>🛣 Career Roadmap</h3>
              <p>Get personalized career guidance and learning paths.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Build Your Career?</h2>
          <p>Start using AI-powered career tools today.</p>

          <button>Get Started</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;