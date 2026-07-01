import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/RegisterForm.css";

function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(formData.password !== formData.confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    if(!formData.terms){
      alert("Please accept Terms & Conditions.");
      return;
    }

    console.log(formData);

    alert("Registration Successful!");

  };

  return (

    <section className="register-section">

      <div className="register-card">

        <div className="register-header">

          <h2>Create Account 🚀</h2>

          <p>
            Join JobPilot AI and start your career journey today.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

          </div>

          <div className="input-group">

            <label>Confirm Password</label>

            <div className="password-box">

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

          </div>

          <div className="register-options">

            <label>

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              I agree to the Terms & Conditions

            </label>

          </div>

          <button
            type="submit"
            className="register-submit-btn"
          >
            Create Account
          </button>

        </form>

        <div className="login-link">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </section>

  );

}

export default RegisterForm;