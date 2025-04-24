import React from "react";
import "../styles/About.css"; // Make sure to create/update this file

export default function About() {
  return (
    <div className="about-section" id="about">
      {/* New Header Container */}
      <div className="about-header">
        {/* Left Column: Text */}
        <div className="about-header-text">
          <h2 className="about-title">// Hi</h2>
          <h3 className="about-subtitle">
            I'm Vibhishan, a software developer from India based in London, UK.
          </h3>
        </div>

        {/* Right Column: Logo/Image */}
        <div className="about-header-logo">
          {/* --- Replace this with your actual logo --- */}
          {/* Example using a simple placeholder SVG */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="48" stroke="#bbb" strokeWidth="4" />
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#bbb"
              fontSize="18"
              fontFamily="Inter, sans-serif"
            >
              ?
            </text>
          </svg>
          {/* Example using an img tag (if you have an image file) */}
          {/* <img src="/path/to/your/about-logo.png" alt="Descriptive alt text" /> */}
          {/* --- End of Placeholder --- */}
        </div>
      </div>{" "}
      {/* End of about-header */}
      {/* Existing Content Box - Remains below the header */}
      <div className="about-content">
        <p className="about-paragraph">
          I am passionate about building products that are user-friendly and
          efficient with a focus on design.
        </p>
        <p className="about-paragraph">
          I love working with React, JavaScript but I'm also interested in
          working with other technologies including Python, and more.
        </p>
        <p className="about-paragraph">
          PS: I have love hate relationship with Vibe Coding!
        </p>
      </div>{" "}
      {/* End of about-content */}
    </div> // End of about-section
  );
}
