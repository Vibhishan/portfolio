import React from "react";
import "../styles/components/NavBar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <svg
          width="81"
          height="39"
          viewBox="0 0 81 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
        >
          <path
            d="M36.0722 2.1308H5L36.0722 33.203V2.1308Z"
            stroke="black"
            strokeWidth="4"
            className="logo-path"
          />
          <path
            d="M45.004 2.1308H76.0762L45.004 33.203V2.1308Z"
            stroke="black"
            strokeWidth="4"
            className="logo-path"
          />
          <path
            d="M45.004 2.13099L76.0762 33.2032L68.3081 25.4351L60.5401 17.6671"
            stroke="black"
            strokeWidth="4"
            className="logo-path"
          />
        </svg>
      </div>
      <div className="navbar-location">
        <h4 className="navbar-text">Based in London, UK</h4>
      </div>
      <div className="navbar-email">
        <h4 className="navbar-text">
          <a href="mailto:hello@vibhishanranga.com">hello@vibhishanranga.com</a>
        </h4>
      </div>
      <div className="navbar-cv">
        <a
          href="/assets/Vibhishan_Ranga_CV_Web.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
          download="Vibhishan_Ranga_CV.pdf"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
