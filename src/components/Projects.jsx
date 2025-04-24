import React from "react";
import "../styles/Projects.css"; // Make sure to create/update this file

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      {/* Header Section */}
      <div className="projects-header">
        {/* Left Column: Text */}
        <div className="projects-header-text">
          <h2 className="projects-title">// Projects</h2>
          <h3 className="projects-subtitle">
            I have worked on a few projects in my free time. I am always looking
            for an opportunity to learn new technologies and explore the world
            of software development.
          </h3>
        </div>
        {/* Right Column: Logo */}
        <div className="projects-header-logo">
          {/* --- Placeholder Logo --- */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="5"
              stroke="#bbb"
              strokeWidth="4"
              fill="none"
            />
            <line
              x1="30"
              y1="30"
              x2="70"
              y2="70"
              stroke="#bbb"
              strokeWidth="4"
            />
            <line
              x1="70"
              y1="30"
              x2="30"
              y2="70"
              stroke="#bbb"
              strokeWidth="4"
            />
            <text
              x="50%"
              y="95%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#bbb"
              fontSize="12"
              fontFamily="Inter, sans-serif"
            >
              Logo
            </text>
          </svg>
          {/* --- End Placeholder --- */}
        </div>
      </div>
      {/* Grid Container for Project Cards */}
      <div className="projects-container">
        {/* --- Project Cards --- */}
        {/* Card 1 */}
        <div className="project-card">
          <h3 className="project-title">Hangman</h3>
          <p className="project-description">A simple word guessing game.</p>
          <div className="project-details">
            <div className="project-tags">
              <span className="project-tag">In Production</span>
              <span className="project-tag">Frontend</span>
              <span className="project-tag">Backend</span>
            </div>
            <div className="project-technologies">
              <span className="project-tech">React</span>
              <span className="project-tech">Node.js</span>
              <span className="project-tech">Express</span>
              <span className="project-tech">Sqlite3</span>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="project-card">
          <h3 className="project-title">Minimal Sketch</h3>
          <p className="project-description">
            An online multiplayer pictionary game.
          </p>
          <div className="project-details">
            <div className="project-tags">
              <span className="project-tag">Developing</span>
              <span className="project-tag">Frontend</span>
              <span className="project-tag">Backend</span>
            </div>
            <div className="project-technologies">
              <span className="project-tech">React</span>
              <span className="project-tech">Node.js</span>
              <span className="project-tech">Websockets</span>
              <span className="project-tech">Sqlite3</span>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="project-card">
          <h3 className="project-title">BookMyShow</h3>
          <p className="project-description">
            Backend code for BookMyShow clone, and online movie ticket booking
            website.
          </p>
          <div className="project-details">
            <div className="project-tags">
              <span className="project-tag">Repo Only</span>
            </div>
            <div className="project-technologies">
              <span className="project-tech">Java</span>
              <span className="project-tech">Spring Boot</span>
              <span className="project-tech">PostgreSQL</span>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="project-card">
          <h3 className="project-title">TicTacToe</h3>
          <p className="project-description">
            A CLI-only TicTacToe game focussed on design patterns.
          </p>
          <div className="project-details">
            <div className="project-tags">
              <span className="project-tag">Repo Only</span>
            </div>
            <div className="project-technologies">
              <span className="project-tech">Java</span>
            </div>
          </div>
        </div>
        {/* --- End Project Cards --- */}
      </div>{" "}
      {/* End projects-container */}
    </div> // End projects-section
  );
}
