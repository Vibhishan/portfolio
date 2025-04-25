import React from "react";
import "../styles/components/Introduction.scss"; // Import SCSS file

export default function Introduction() {
  // Replicated SVG component for clarity (could be imported)
  const DecorativeSvg = () => (
    <svg
      className="intro-decorative-svg" // Added class for styling
      // width="359" // Control size via CSS instead
      // height="525"
      viewBox="0 0 359 525"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet" // Helps with scaling
    >
      {/* SVG paths remain the same */}
      <path
        d="M147.422 147.421L147.422 17L17.0005 147.421L147.422 147.421Z"
        stroke="currentColor" // Use currentColor to inherit color
        strokeWidth="13.593"
      />
      <path
        d="M147.421 147.421L17 17L49.6053 49.6053L82.2107 82.2107"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M147.422 327.734L147.422 197.312L17.0005 327.734L147.422 327.734Z"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M147.421 327.734L17 197.312L49.6053 229.918L82.2107 262.523"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M212.162 197.313L212.162 327.734L342.583 197.313L212.162 197.313Z"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M212.163 197.313L342.584 327.734L309.979 295.129L277.373 262.524"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M212.162 377.626L212.162 508.047L342.583 377.626L212.162 377.626Z"
        stroke="currentColor"
        strokeWidth="13.593"
      />
      <path
        d="M212.163 377.626L342.584 508.047L309.979 475.442L277.373 442.836"
        stroke="currentColor"
        strokeWidth="13.593"
      />
    </svg>
  );

  return (
    // Use a section element for semantic structure
    <section className="introduction-section">
      {/* Container for the left SVG */}
      <div className="intro-svg-container intro-svg-left">
        <DecorativeSvg />
      </div>

      {/* Container for the central text content */}
      <div className="intro-text-content">
        {/* Use h1 for the main name */}
        <h1 className="intro-name">Vibhishan Ranga</h1>
        {/* Use h2 for the description */}
        <h1 className="intro-title">Developer; Designer.</h1>
      </div>

      {/* Container for the right SVG */}
      <div className="intro-svg-container intro-svg-right">
        {/* You might need to flip this SVG horizontally if it should mirror the left one */}
        <DecorativeSvg />
      </div>
    </section>
  );
}
