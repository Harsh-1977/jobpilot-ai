import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./ResumeBuilder.css";

function ResumeBuilder() {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    education: "",
    skills: "",
    projects: "",
    experience: ""
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(resume);

    // Save API will be added later
    alert("Resume Saved Successfully!");
  };

  return (
    <DashboardLayout>
      <div className="resume-container">

        <h2>Resume Builder</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="summary"
            placeholder="Professional Summary"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="education"
            placeholder="Education"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="skills"
            placeholder="Skills"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="projects"
            placeholder="Projects"
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="experience"
            placeholder="Work Experience"
            onChange={handleChange}
          />

          <button type="submit">
            Save Resume
          </button>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default ResumeBuilder;