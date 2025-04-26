import React from "react";
import "../styles/components/Experience.scss"; // Make sure to create/update this file

// Updated SVG for the long horizontal arrow pointing RIGHT
const LongArrowSvg = () => {
  return (
    <svg
      className="long-arrow-svg"
      viewBox="0 0 1000 20" // Keeping viewBox, adjust if stroke/head size changes significantly
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none" // Allow it to stretch horizontally
    >
      {/* Arrow Line - stretches */}
      <line
        x1="0" // Start from left edge
        y1="10" // Vertical center
        x2="990" // End just before arrowhead
        y2="10" // Vertical center
        stroke="currentColor"
        strokeWidth="2" // Match desired line thickness
      />
      {/* Arrow Head (Right Pointing) */}
      <polyline
        points="990,0 1000,10 990,20" // Points for the right-pointing arrowhead
        stroke="currentColor"
        strokeWidth="2" // Match line thickness
        fill="none" // No fill for the head
      />
    </svg>
  );
};

export default function Experience() {
  return (
    <section className="experience-section" data-aos="fade-up">
      {/* Container for the timeline elements */}
      <div className="timeline-container-long-arrow" data-aos="fade-up">
        {" "}
        {/* New class name */}
        {/* The single long arrow SVG */}
        <div className="long-arrow-container">
          <LongArrowSvg />
        </div>
        {/* Experience Point 1 (Left, Below) */}
        <div
          className="timeline-point timeline-point-below"
          data-aos="fade-up"
          data-aos-delay="20"
        >
          <div className="timeline-content">
            <h3 className="experience-title">Summer Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">May 2019 - July 2019</h4>
          </div>
        </div>
        {/* Experience Point 2 (Center, Above) */}
        <div
          className="timeline-point timeline-point-above"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <div className="timeline-content">
            <h3 className="experience-title">Project Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">Jan 2021 - July 2021</h4>
          </div>
        </div>
        {/* Experience Point 3 (Right, Below) */}
        <div
          className="timeline-point timeline-point-below"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          <div className="timeline-content">
            <h3 className="experience-title">Software Developer</h3>
            <h4 className="experience-company">@ Delta Capita</h4>
            <h4 className="experience-dates">Oct 2022 - Present</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
