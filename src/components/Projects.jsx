import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Projects.scss";

// Replicated SVG component
const DecorativeSvg = () => (
  <svg
    className="intro-decorative-svg projects-decorative-svg"
    viewBox="0 0 359 525"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* SVG paths */}
    <path
      d="M147.422 147.421L147.422 17L17.0005 147.421L147.422 147.421Z"
      stroke="currentColor"
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

export default function Projects() {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
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
    if (row1Ref.current) observer.observe(row1Ref.current);
    if (row2Ref.current) observer.observe(row2Ref.current);
    if (row3Ref.current) observer.observe(row3Ref.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (row1Ref.current) observer.unobserve(row1Ref.current);
      if (row2Ref.current) observer.unobserve(row2Ref.current);
      if (row3Ref.current) observer.unobserve(row3Ref.current);
    };
  }, []);

  return (
    // Main container for the projects section
    <section className="projects-section" ref={sectionRef}>
      {/* Row 1: Project Card Left, SVG Right */}
      <div className="project-row project-row-svg-right" ref={row1Ref}>
        {/* Project Card 1 */}
        <Link to="/hangman" className="project-card project-card-1">
          <h3 className="project-title">Hangman</h3>
          {/* Tags for status/category */}
          <div className="project-tags project-tags-status">
            <span className="tag tag-status">In Production</span>
            <span className="tag tag-category">Frontend</span>
            <span className="tag tag-category">Backend</span>
          </div>
          {/* Tags for technologies */}
          <div className="project-tags project-tags-tech">
            <span className="tag tag-tech">React</span>
            <span className="tag tag-tech">Node.js</span>
            <span className="tag tag-tech">Express</span>
            <span className="tag tag-tech">Sqlite3</span>
          </div>
          <p className="project-description">
            A simple hangman game built with React. The player can guess the
            word by entering a letter. If the letter is in the word, it will be
            revealed. If the letter is not in the word, the player will lose a
            life.
          </p>
          <div className="project-link-indicator">View Project →</div>
        </Link>
        {/* SVG Container */}
        <div className="project-svg-container project-svg-right desktop-only-svg">
          <DecorativeSvg />
        </div>
      </div>

      {/* Row 2: SVG Left, Project Card Right */}
      <div className="project-row project-row-svg-left" ref={row2Ref}>
        {/* SVG Container */}
        <div className="project-svg-container project-svg-left desktop-only-svg">
          <DecorativeSvg />
        </div>
        {/* Project Card 2 */}
        <Link to="/minimal-sketch" className="project-card project-card-2">
          <h3 className="project-title">Minimal Sketch</h3>
          {/* Tags for status/category */}
          <div className="project-tags project-tags-status">
            <span className="tag tag-status">In Development</span>
            <span className="tag tag-category">Frontend</span>
            <span className="tag tag-category">Backend</span>
          </div>
          {/* Tags for technologies */}
          <div className="project-tags project-tags-tech">
            <span className="tag tag-tech">React</span>
            <span className="tag tag-tech">Node.js</span>
            <span className="tag tag-tech">Websockets</span>
            <span className="tag tag-tech">Sqlite3</span>
          </div>
          <p className="project-description">
            A minimal sketch of a website built with React. The website is an
            online multiplayer pictionary game. Compete against your friends to
            see who can guess the word the fastest.
          </p>
          <div className="project-link-indicator">View Project →</div>
        </Link>
      </div>

      {/* Row 3: Two Project Cards Side-by-Side */}
      <div className="project-row project-row-double-card" ref={row3Ref}>
        {/* Project Card 3 */}
        <a
          href="https://github.com/Vibhishan/bookmyshow-design"
          target="_blank"
          className="project-card project-card-3"
        >
          <h3 className="project-title">Book-My-Show</h3>
          {/* Tags for status/category */}
          <div className="project-tags project-tags-status">
            <span className="tag tag-status">Repo Only</span>
          </div>
          {/* Tags for technologies */}
          <div className="project-tags project-tags-tech">
            <span className="tag tag-tech">Java</span>
            <span className="tag tag-tech">SpringBoot</span>
            <span className="tag tag-tech">PostgreSQL</span>
          </div>
          <p className="project-description">
            Backend code for BookMyShow clone, an online movie ticket booking
            website.
          </p>
        </a>
        {/* Project Card 4 */}
        <a
          href="https://github.com/Vibhishan/tictactoe-design"
          target="_blank"
          className="project-card project-card-4"
        >
          <h3 className="project-title">Tic-Tac-Toe</h3>
          {/* Tags for status/category */}
          <div className="project-tags project-tags-status">
            <span className="tag tag-status">Repo Only</span>
          </div>
          {/* Tags for technologies */}
          <div className="project-tags project-tags-tech">
            <span className="tag tag-tech">Java</span>
          </div>
          <p className="project-description">
            A CLI-only TicTacToe game focused on design patterns.
          </p>
        </a>
      </div>
    </section>
  );
}
