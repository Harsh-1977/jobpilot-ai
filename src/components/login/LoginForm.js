import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../styles/LoginForm.css";
import API from "../../api/authApi";

function LoginForm() {
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false
  });

  useEffect(() => {

    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {
      setFormData({
        email: savedEmail,
        password: "",
        remember: true
      });
    }

  }, []);

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      // Remember Me
      if (formData.remember) {

        localStorage.setItem("rememberEmail", formData.email);

      } else {

        localStorage.removeItem("rememberEmail");

      }

      // Save logged in user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert(response.data.message);

      // Redirect to Home Page
      navigate("/Dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message || "Login Failed"
      );

    }

  };

  return (

    <section className="login-section">

      <div className="login-card">

        <div className="login-header">

          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue your AI career journey.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

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
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >

                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}

              </span>

            </div>

          </div>

          <div className="login-options">

            <label className="remember">

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="forgot-link"
            >
              Forgot Password?
            </Link>

          </div>

          <button type="submit" className="login-submit-btn">
            Login
          </button>

        </form>

        <div className="register-link">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </section>

  );
}

export default LoginForm;