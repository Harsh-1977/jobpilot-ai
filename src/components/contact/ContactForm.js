import React, { useState } from "react";
import "../../styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        <div className="form-heading">
          <span>Contact Us</span>

          <h2>Send a message</h2>

          <p>
            Have questions or feedback? Fill out the form below and our team
            will get back to you as soon as possible.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="input-row">

            <div className="input-group">
              <label>Name:</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email:</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Subject:</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Message:</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </div>

        </form>

      </div>
    </section>
  );
}

export default ContactForm;