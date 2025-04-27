import React, { useState } from "react";
import "../styles/components/MobileWarning.scss";

export default function MobileWarning({ onDismiss }) {
  const handleContinue = () => {
    // Just call the dismiss callback directly
    // The App component will handle showing the loading screen
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div className="mobile-warning-container">
      <div className="mobile-warning-content">
        <h1 className="mobile-warning-title">Mobile Device Detected</h1>
        <p className="mobile-warning-text">
          For the best experience viewing this portfolio, please visit on a
          desktop browser.
        </p>
        <button className="continue-button" onClick={handleContinue}>
          Continue to Site
        </button>
      </div>
    </div>
  );
}
