import React from "react";
import "../styles/components/Experience.scss"; // Make sure to create/update this file

// Updated SVG for the long horizontal arrow pointing RIGHT
const LongArrowSvg = () => {
  return (
    <svg
      className="long-arrow-svg"
      width="100%"
      height="94"
      viewBox="0 0 1561 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M-0.00488281 47H1556.17" stroke="black" stroke-width="6.24593" />
      <path
        d="M1555.92 46.9598L1517.48 8.51953L1517.44 85.4398L1555.92 46.9598Z"
        stroke="black"
        stroke-width="6.62693"
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
