import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/");

  };

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">JobPilot AI</Link>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>

      </ul>

      {/* Buttons */}
      <div className="nav-buttons">

        {user ? (

          <button
            className="login-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        ) : (

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

        )}

        <Link
          to="/register"
          className="register-btn"
        >
          Register
        </Link>

      </div>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>

  );
}

export default Navbar;