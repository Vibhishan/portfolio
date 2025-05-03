import React, { useEffect, useRef } from "react";
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
      <path d="M-0.00488281 47H1556.17" stroke="black" strokeWidth="6.24593" />
      <path
        d="M1555.92 46.9598L1517.48 8.51953L1517.44 85.4398L1555.92 46.9598Z"
        stroke="black"
        strokeWidth="6.62693"
      />
    </svg>
  );
};

export default function Experience() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const point1Ref = useRef(null);
  const point2Ref = useRef(null);
  const point3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");

            // Add delay for timeline points
            if (entry.target === point1Ref.current) {
              setTimeout(() => {
                point1Ref.current.classList.add("animate-fade-in");
              }, 100);
            }
            if (entry.target === point2Ref.current) {
              setTimeout(() => {
                point2Ref.current.classList.add("animate-fade-in");
              }, 250);
            }
            if (entry.target === point3Ref.current) {
              setTimeout(() => {
                point3Ref.current.classList.add("animate-fade-in");
              }, 400);
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (containerRef.current) observer.observe(containerRef.current);
    if (point1Ref.current) observer.observe(point1Ref.current);
    if (point2Ref.current) observer.observe(point2Ref.current);
    if (point3Ref.current) observer.observe(point3Ref.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (point1Ref.current) observer.unobserve(point1Ref.current);
      if (point2Ref.current) observer.unobserve(point2Ref.current);
      if (point3Ref.current) observer.unobserve(point3Ref.current);
    };
  }, []);

  return (
    <section className="experience-section" ref={sectionRef}>
      {/* Container for the timeline elements */}
      <div className="timeline-container-long-arrow" ref={containerRef}>
        {" "}
        {/* New class name */}
        {/* The single long arrow SVG */}
        <div className="long-arrow-container">
          <LongArrowSvg />
        </div>
        {/* Experience Point 1 (Left, Below) */}
        <div className="timeline-point timeline-point-below" ref={point1Ref}>
          <div className="timeline-content">
            <h3 className="experience-title">Summer Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">May 2019 - July 2019</h4>
          </div>
        </div>
        {/* Experience Point 2 (Center, Above) */}
        <div className="timeline-point timeline-point-above" ref={point2Ref}>
          <div className="timeline-content">
            <h3 className="experience-title">Project Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">Jan 2021 - July 2021</h4>
          </div>
        </div>
        {/* Experience Point 3 (Right, Below) */}
        <div className="timeline-point timeline-point-below" ref={point3Ref}>
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
