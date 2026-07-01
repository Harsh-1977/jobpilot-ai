import React from "react";
import "../../styles/ContactInfo.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock
} from "react-icons/fa";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Our Location</h3>
          <p>Ahmedabad, Gujarat, India</p>
        </div>

        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email Us</h3>
          <p>support@jobpilotai.com</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h3>Call Us</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-card">
          <FaClock className="info-icon" />
          <h3>Working Hours</h3>
          <p>Mon - Fri<br />9:00 AM - 6:00 PM</p>
        </div>

      </div>
    </section>
  );
}

export default ContactInfo;