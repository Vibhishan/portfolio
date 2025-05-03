import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ProjectPage.scss";
import NavBar from "./NavBar";

const HangmanComponent = () => {
  return (
    <div className="project-page-container">
      <NavBar />
      <div className="project-page-content">
        <h1 className="project-page-title">Hangman</h1>
        <p className="project-page-description">
          A simple hangman game built with React. The player can guess the word
          by entering a letter. If the letter is in the word, it will be
          revealed. If the letter is not in the word, the player will lose a
          life.
        </p>

        <div className="project-buttons">
          <a
            href="https://github.com/Vibhishan/hangman-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Frontend Code
          </a>
          <a
            href="https://github.com/Vibhishan/hangman-backend"
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

export default HangmanComponent;
