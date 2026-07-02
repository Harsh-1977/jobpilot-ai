import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>JobPilot AI</h2>

      <NavLink to="/dashboard">Dashboard</NavLink>

      <NavLink to="/profile">My Profile</NavLink>

      <NavLink to="/resume-builder">Resume Builder</NavLink>

      <NavLink to="/my-resumes">My Resumes</NavLink>

      <NavLink to="/resume-analyzer">Resume Analyzer</NavLink>

      <NavLink to="/ai-interview">AI Interview</NavLink>

      <NavLink to="/career-roadmap">Career Roadmap</NavLink>

      <NavLink to="/settings">Settings</NavLink>

      <NavLink to="/logout">Logout</NavLink>

    </div>

  );

}

export default Sidebar;