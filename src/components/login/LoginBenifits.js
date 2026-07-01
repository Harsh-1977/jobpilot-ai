import React from "react";
import { FaCheckCircle, FaUserShield } from "react-icons/fa";
import "../../styles/LoginBenefits.css";

function LoginBenefits() {
  return (
    <div className="login-benefits">

      <div className="benefit-badge">
        <FaUserShield />
        <span>Secure Login</span>
      </div>

      <h2>Why Login?</h2>

      <p>
        Your account gives you access to every feature of
        <strong> JobPilot AI</strong>. Sign in to continue your career
        journey with powerful AI tools designed to help you succeed.
      </p>

      <div className="benefit-list">

        <div className="benefit-item">
          <FaCheckCircle />
          <span>Personalized Dashboard</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>Resume Builder</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>AI Resume Analyzer</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>AI Interview Practice</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>Job Recommendations</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>Cover Letter Generator</span>
        </div>

        <div className="benefit-item">
          <FaCheckCircle />
          <span>Career Roadmap</span>
        </div>

      </div>

      <div className="benefit-footer">
        <h3>10,000+</h3>
        <p>Students and professionals trust JobPilot AI to grow their careers.</p>
      </div>

    </div>
  );
}

export default LoginBenefits;