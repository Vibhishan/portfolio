import React, { useEffect, useState } from "react";
import "../styles/components/Loading.scss";

export default function Loading({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // First make the logo visible
    setIsVisible(true);

    // Then after a delay, start the split animation
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // After animation completes, call the onLoadingComplete callback
      setTimeout(() => {
        onLoadingComplete();
      }, 1000); // Adjust timing to match animation duration
    }, 1000); // Increased delay to show the logo longer

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`loading-container ${isVisible ? "visible" : ""} ${
        isAnimating ? "animating" : ""
      }`}
    >
      <div className="logo-container">
        <div className="logo-left">
          <svg
            width="1702"
            height="831"
            viewBox="0 0 1702 831"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <path
              d="M769.599 67.8179H92.5723L769.599 744.844V67.8179Z"
              stroke="black"
              strokeWidth="58.0308"
              className="logo-path"
            />
          </svg>
        </div>
        <div className="logo-right">
          <svg
            width="1702"
            height="831"
            viewBox="0 0 1702 831"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <path
              d="M932.401 67.8179H1609.43L932.401 744.844V67.8179Z"
              stroke="black"
              strokeWidth="58.0308"
              className="logo-path"
            />
            <path
              d="M932.401 67.8204L1609.43 744.847L1440.17 575.59L1270.91 406.334"
              stroke="black"
              strokeWidth="58.0308"
              className="logo-path"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
