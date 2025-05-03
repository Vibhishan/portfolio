import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ProjectPage.scss";
import NavBar from "./NavBar";

const MinimalSketchComponent = () => {
  return (
    <div className="project-page-container">
      <NavBar />
      <div className="project-page-content">
        <h1 className="project-page-title">Minimal Sketch</h1>
        <p className="project-page-description">
          A minimal sketch of a website built with React. The website is an
          online multiplayer pictionary game. Compete against your friends to
          see who can guess the word the fastest.
        </p>

        <div className="project-buttons">
          <a
            href="https://github.com/Vibhishan/minimal-sketch-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Frontend Code
          </a>
          <a
            href="https://github.com/Vibhishan/minimal-sketch-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Backend Code
          </a>
        </div>

        <Link to="/" className="back-button">
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default MinimalSketchComponent;
