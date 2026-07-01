import React from "react";
import {
  FaCheckCircle,
  FaUserPlus
} from "react-icons/fa";

import "../../styles/RegisterBenefits.css";

function RegisterBenefits() {
  return (
    <div className="register-benefits">

      <div className="register-badge">
        <FaUserPlus />
        <span>Join JobPilot AI</span>
      </div>

      <h2>Start Your Career Journey</h2>

      <p>
        Create your free account to unlock powerful AI tools
        and manage your career from one place.
      </p>

      <div className="register-feature-list">

        <div className="register-feature">
          <FaCheckCircle />
          <span>Create ATS-Friendly Resumes</span>
        </div>

        <div className="register-feature">
          <FaCheckCircle />
          <span>Analyze Your Resume with AI</span>
        </div>

        <div className="register-feature">
          <FaCheckCircle />
          <span>Practice AI Mock Interviews</span>
        </div>

        <div className="register-feature">
          <FaCheckCircle />
          <span>Discover Personalized Jobs</span>
        </div>

        <div className="register-feature">
          <FaCheckCircle />
          <span>Track Your Career Progress</span>
        </div>

      </div>

      <div className="register-footer">

        <h3>Free Forever</h3>

        <p>
          Create your account in less than a minute and
          begin exploring AI-powered career tools.
        </p>

      </div>

    </div>
  );
}

export default RegisterBenefits;