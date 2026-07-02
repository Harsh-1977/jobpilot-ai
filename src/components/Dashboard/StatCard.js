import React from "react";
import "./StatCard.css";

function StatCard({ title, value, icon }) {

  return (

    <div className="stat-card">

      <h1>{icon}</h1>

      <h3>{value}</h3>

      <p>{title}</p>

    </div>

  );

}

export default StatCard;