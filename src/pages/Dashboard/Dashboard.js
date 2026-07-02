import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar.js";
import Topbar from "../../components/Dashboard/Topbar";
import StatCard from "../../components/Dashboard/StatCard";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <div className="welcome">

          <h2>Welcome Back 👋</h2>

          <p>
            Manage your resumes, analyze ATS score,
            practice AI interviews and track your career progress.
          </p>

        </div>

        <div className="stats">

          <StatCard
            title="My Resumes"
            value="03"
            icon="📄"
          />

          <StatCard
            title="ATS Score"
            value="89%"
            icon="🎯"
          />

          <StatCard
            title="AI Interviews"
            value="05"
            icon="🤖"
          />

          <StatCard
            title="Roadmaps"
            value="02"
            icon="🛣️"
          />

        </div>

        <div className="dashboard-grid">

          <div className="recent">

            <h3>Recent Activity</h3>

            <ul>

              <li>✅ Resume Updated</li>

              <li>🎯 ATS Score Improved</li>

              <li>🤖 AI Interview Completed</li>

              <li>📄 Resume Downloaded</li>

            </ul>

          </div>

          <div className="quick">

            <h3>Quick Actions</h3>

            <button>Create Resume</button>

            <button>Analyze Resume</button>

            <button>Start Interview</button>

            <button>Career Roadmap</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;