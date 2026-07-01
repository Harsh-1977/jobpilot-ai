import React from "react";
import { Link } from "react-router-dom";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Company */}

                <div className="footer-section">

                    <h2>JobPilot AI</h2>

                    <p>
                        AI-powered career platform that helps job seekers
                        build resumes, prepare for interviews and discover
                        better job opportunities.
                    </p>

                    <div className="social-icons">

                        <a href="#"><FaFacebook /></a>

                        <a href="#"><FaInstagram /></a>

                        <a href="#"><FaLinkedin /></a>

                        <a href="#"><FaGithub /></a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/features">Features</Link>

                    <Link to="/contact">Contact</Link>

                </div>

                {/* Services */}

                <div className="footer-section">

                    <h3>Services</h3>

                    <Link to="/resume-builder">Resume Builder</Link>

                    <Link to="/resume-analyzer">Resume Analyzer</Link>

                    <Link to="/interview-ai">AI Interview</Link>

                    <Link to="/career-roadmap">Career Roadmap</Link>

                </div>

                {/* Contact */}

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p><FaEnvelope /> support@jobpilotai.com</p>

                    <p><FaPhone /> +91 98765 43210</p>

                    <p><FaMapMarkerAlt /> Junagadh, Gujarat</p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 JobPilot AI. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;