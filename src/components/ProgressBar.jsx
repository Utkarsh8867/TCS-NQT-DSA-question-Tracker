// ProgressBar.jsx
import React from "react";
import "../styles/ProgressBar.css";

const ProgressBar = ({ progress }) => {
  let progressColor = "#f1c40f";
  if (progress === 100) {
    progressColor = "#2ecc71";
  } else if (progress <= 50) {
    progressColor = "#e74c3c";
  }

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: progressColor,
        }}
      >
        <span className="progress-text">{progress}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
