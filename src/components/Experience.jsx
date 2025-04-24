import React from "react";
import "../styles/Experience.css"; // Make sure to create/update this file

export default function Experience() {
  return (
    <div className="experience-section" id="experience">
      {/* Header Section */}
      <div className="experience-header">
        {/* Left Column: Text */}
        <div className="experience-header-text">
          <h2 className="experience-title">// Experience</h2>
          <h3 className="experience-subtitle">
            I've worked at a few places with some very incredible people,
            learning a lot along the way.
          </h3>
        </div>
        {/* Right Column: Logo */}
        <div className="experience-header-logo">
          {/* --- Placeholder Logo --- */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"
              stroke="#bbb"
              strokeWidth="4"
              fill="none"
            />
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#bbb"
              fontSize="14"
              fontFamily="Inter, sans-serif"
            >
              Logo
            </text>
          </svg>
          {/* --- End Placeholder --- */}
        </div>
      </div>
      {/* Grid Container for Company Logos */}
      <div className="experience-companies">
        {/* Company Block 1 */}
        <div className="experience-company">
          <img
            // Ensure this path is correct relative to your project's public folder
            src="/images/DC Logo.jpeg"
            alt="Delta Capita Logo"
            className="company-logo"
          />
        </div>
        {/* Company Block 2 */}
        <div className="experience-company">
          <img
            // Ensure this path is correct relative to your project's public folder
            src="/images/Brun Logo.jpeg"
            alt="Brun Health Logo"
            className="company-logo"
          />
        </div>
      </div>{" "}
      {/* End experience-companies */}
    </div> // End experience-section
  );
}
