import React from "react";
import "./Topbar.css";

function Topbar() {
  return (

    <div className="topbar">

      <input
        type="text"
        placeholder="Search..."
      />

      <div className="top-right">

        <span>🔔</span>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
        />

      </div>

    </div>

  );
}

export default Topbar;