import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
      <h3 className="contact-subtitle">
        I'm always looking for new opportunities to learn and grow. If you'd
        like to get in touch, please don't hesitate to reach out.
      </h3>

      <div className="contact-content">
        <p className="contact-text">
          Let us create something amazing together.
        </p>
        <p className="contact-email">hello@vibhishanranga.com</p>
        <p className="contact-text">
          Or just hit me up and let us talk about tech.
        </p>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="/images/social/linkedin.svg"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="/images/social/github.svg"
              alt="GitHub"
              className="social-icon"
            />
          </a>
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="/images/social/instagram.svg"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="/images/social/twitter.svg"
              alt="Twitter"
              className="social-icon"
            />
          </a>
          <a
            href="https://discord.com/users/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src="/images/social/discord.svg"
              alt="Discord"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
