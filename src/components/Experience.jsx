// import React from "react";
// import "../styles/components/Experience.scss"; // Make sure to create/update this file

// // Modified ArrowSvg to handle direction
// const ArrowSvg = ({ direction = "down" }) => {
//   // Define paths for both directions
//   const pathDown =
//     "M53.7907 90.513L98.751 45.5527L8.83035 45.5527L53.7907 90.513Z";
//   const stem = "M53.79 90.5124L53.79 0.591797L53.79 23.072L53.79 45.5521";
//   // Path for upward arrow head (approximated - adjust viewBox/paths if needed)
//   const pathUp = "M53.7907 5.487L98.751 50.4473H8.83035L53.7907 5.487Z";

//   return (
//     <svg
//       className={`timeline-arrow timeline-arrow-${direction}`} // Add class based on direction
//       // Adjust viewBox if needed, especially for the up arrow
//       viewBox="0 0 107 96"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       preserveAspectRatio="xMidYMid meet" // Helps scaling
//     >
//       {/* Conditionally render arrow head */}
//       <path
//         d={direction === "up" ? pathUp : pathDown}
//         stroke="currentColor" // Inherit color
//         strokeWidth="6.62693"
//       />
//       {/* Stem - adjust path if needed for up arrow alignment */}
//       <path d={stem} stroke="currentColor" strokeWidth="6.62693" />
//     </svg>
//   );
// };

// export default function Experience() {
//   return (
//     <section className="experience-section">
//       {/* Container for the timeline elements */}
//       <div className="timeline-container">
//         {/* The visual timeline line */}
//         <div className="timeline-line"></div>

//         {/* Experience Point 1 (Left, Below) */}
//         <div className="timeline-point timeline-point-below">
//           <div className="timeline-marker">
//             <ArrowSvg direction="down" />
//           </div>
//           <div className="timeline-content">
//             <h3 className="experience-title">Summer Intern</h3>
//             <h4 className="experience-company">@ Brün Health</h4>

//             <h4 className="experience-dates">May 2019 - July 2019</h4>
//             {/* Optional: Add description <p> here */}
//           </div>
//         </div>

//         {/* Experience Point 2 (Center, Above) */}
//         <div className="timeline-point timeline-point-above">
//           <div className="timeline-marker">
//             {/* Note: Using direction="up" */}
//             <ArrowSvg direction="up" />
//           </div>
//           <div className="timeline-content">
//             <h3 className="experience-title">Project Intern</h3>
//             <h4 className="experience-company">@ Brün Health</h4>
//             <h4 className="experience-dates">Jan 2021 - July 2021</h4>
//             {/* Optional: Add description <p> here */}
//           </div>
//         </div>

//         {/* Experience Point 3 (Right, Below) */}
//         <div className="timeline-point timeline-point-below">
//           <div className="timeline-marker">
//             <ArrowSvg direction="down" />
//           </div>
//           <div className="timeline-content">
//             <h3 className="experience-title">Software Developer</h3>
//             <h4 className="experience-company">@ Delta Capita</h4>

//             <h4 className="experience-dates">Oct 2022 - Present</h4>
//             {/* Optional: Add description <p> here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
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
    <section className="experience-section">
      {/* Container for the timeline elements */}
      <div className="timeline-container-long-arrow">
        {" "}
        {/* New class name */}
        {/* The single long arrow SVG */}
        <div className="long-arrow-container">
          <LongArrowSvg />
        </div>
        {/* Experience Point 1 (Left, Below) */}
        {/* Removed marker div */}
        <div className="timeline-point timeline-point-below">
          <div className="timeline-content">
            <h3 className="experience-title">Summer Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">May 2019 - July 2019</h4>
          </div>
        </div>
        {/* Experience Point 2 (Center, Above) */}
        {/* Removed marker div */}
        <div className="timeline-point timeline-point-above">
          <div className="timeline-content">
            <h3 className="experience-title">Project Intern</h3>
            <h4 className="experience-company">@ Brün Health</h4>
            <h4 className="experience-dates">Jan 2021 - July 2021</h4>
          </div>
        </div>
        {/* Experience Point 3 (Right, Below) */}
        {/* Removed marker div */}
        <div className="timeline-point timeline-point-below">
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
