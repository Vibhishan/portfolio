import React from "react";
import "../styles/components/Contact.scss"; // Ensure this SCSS file exists

// SVG Component (Consider making this reusable if used elsewhere)
const BackgroundPatternSvg = () => (
  <svg
    width="2668"
    height="812"
    viewBox="0 0 2668 812"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M166.926 177.672L166.926 27.7461L16.9999 177.672L166.926 177.672Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 177.672L17 27.7461L54.4815 65.2276L91.9629 102.709"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 384.949L166.926 235.023L16.9999 384.949L166.926 384.949Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 384.949L17 235.023L54.4815 272.505L91.9629 309.986"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M241.35 235.025L241.35 384.951L391.275 235.025L241.35 235.025Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M241.35 235.025L391.275 384.951L353.794 347.47L316.312 309.988"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 587.551L166.926 437.625L16.9999 587.551L166.926 587.551Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 587.551L17 437.625L54.4815 475.106L91.9629 512.588"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 794.83L166.926 644.904L16.9999 794.83L166.926 794.83Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M166.926 794.83L17 644.904L54.4815 682.386L91.9629 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M241.35 644.904L241.35 794.83L391.275 644.904L241.35 644.904Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M241.35 644.904L391.275 794.83L353.794 757.349L316.312 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M398.605 166.926L398.605 17L248.68 166.926L398.605 166.926Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M398.606 166.926L248.68 17L286.161 54.4815L323.643 91.9629"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 16.9999L473.029 166.926L622.955 16.9999L473.029 16.9999Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 16.9999L622.955 166.926L585.474 129.444L547.992 91.9628"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 224.279L473.029 374.205L622.955 224.279L473.029 224.279Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 224.279L622.955 374.205L585.474 336.724L547.992 299.242"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M398.605 576.807L398.605 426.881L248.68 576.807L398.605 576.807Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M398.606 576.807L248.68 426.881L286.161 464.362L323.643 501.844"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 426.883L473.029 576.809L622.955 426.883L473.029 426.883Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 426.883L622.955 576.809L585.474 539.327L547.992 501.846"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 634.16L473.029 784.086L622.955 634.16L473.029 634.16Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M473.029 634.16L622.955 784.086L585.474 746.604L547.992 709.123"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 177.67L842.957 27.7441L693.031 177.67L842.957 177.67Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 177.67L693.031 27.7441L730.513 65.2256L767.994 102.707"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 384.947L842.957 235.021L693.031 384.947L842.957 384.947Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 384.947L693.031 235.021L730.513 272.503L767.994 309.984"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M917.381 235.023L917.381 384.949L1067.31 235.023L917.381 235.023Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M917.383 235.023L1067.31 384.949L1029.83 347.468L992.346 309.986"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 587.551L842.957 437.625L693.031 587.551L842.957 587.551Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 587.551L693.031 437.625L730.513 475.106L767.994 512.588"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 794.83L842.957 644.904L693.031 794.83L842.957 794.83Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M842.957 794.83L693.031 644.904L730.513 682.386L767.994 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M917.381 644.904L917.381 794.83L1067.31 644.904L917.381 644.904Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M917.383 644.904L1067.31 794.83L1029.83 757.349L992.346 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 177.672L1518.99 27.7461L1369.06 177.672L1518.99 177.672Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 177.672L1369.06 27.7461L1406.55 65.2276L1444.03 102.709"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 384.949L1518.99 235.023L1369.06 384.949L1518.99 384.949Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 384.949L1369.06 235.023L1406.55 272.505L1444.03 309.986"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1593.41 235.025L1593.41 384.951L1743.34 235.025L1593.41 235.025Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1593.41 235.025L1743.34 384.951L1705.86 347.47L1668.38 309.988"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 587.551L1518.99 437.625L1369.06 587.551L1518.99 587.551Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 587.551L1369.06 437.625L1406.55 475.106L1444.03 512.588"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 794.83L1518.99 644.904L1369.06 794.83L1518.99 794.83Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1518.99 794.83L1369.06 644.904L1406.55 682.386L1444.03 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1593.41 644.904L1593.41 794.83L1743.34 644.904L1593.41 644.904Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1593.41 644.904L1743.34 794.83L1705.86 757.349L1668.38 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 177.672L2195.02 27.7461L2045.1 177.672L2195.02 177.672Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 177.672L2045.1 27.7461L2082.58 65.2276L2120.06 102.709"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 384.949L2195.02 235.023L2045.1 384.949L2195.02 384.949Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 384.949L2045.1 235.023L2082.58 272.505L2120.06 309.986"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2269.45 235.025L2269.45 384.951L2419.37 235.025L2269.45 235.025Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2269.45 235.025L2419.37 384.951L2381.89 347.47L2344.41 309.988"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 587.551L2195.02 437.625L2045.1 587.551L2195.02 587.551Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 587.551L2045.1 437.625L2082.58 475.106L2120.06 512.588"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 794.83L2195.02 644.904L2045.1 794.83L2195.02 794.83Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2195.02 794.83L2045.1 644.904L2082.58 682.386L2120.06 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2269.45 644.904L2269.45 794.83L2419.37 644.904L2269.45 644.904Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2269.45 644.904L2419.37 794.83L2381.89 757.349L2344.41 719.867"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1074.64 166.926L1074.64 17L924.711 166.926L1074.64 166.926Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1074.64 166.926L924.711 17L962.192 54.4815L999.674 91.9629"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 16.9999L1149.06 166.926L1298.99 16.9999L1149.06 16.9999Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 16.9999L1298.99 166.926L1261.5 129.444L1224.02 91.9628"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 224.279L1149.06 374.205L1298.99 224.279L1149.06 224.279Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 224.279L1298.99 374.205L1261.5 336.724L1224.02 299.242"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1074.64 576.805L1074.64 426.879L924.711 576.805L1074.64 576.805Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1074.64 576.805L924.711 426.879L962.192 464.36L999.674 501.842"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 426.881L1149.06 576.807L1298.99 426.881L1149.06 426.881Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 426.881L1298.99 576.807L1261.5 539.325L1224.02 501.844"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 634.158L1149.06 784.084L1298.99 634.158L1149.06 634.158Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1149.06 634.158L1298.99 784.084L1261.5 746.603L1224.02 709.121"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1750.67 166.926L1750.67 17L1600.74 166.926L1750.67 166.926Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1750.67 166.926L1600.74 17L1638.22 54.4815L1675.71 91.9629"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 16.9999L1825.09 166.926L1975.02 16.9999L1825.09 16.9999Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 16.9999L1975.02 166.926L1937.54 129.444L1900.05 91.9628"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 224.279L1825.09 374.205L1975.02 224.279L1825.09 224.279Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 224.279L1975.02 374.205L1937.54 336.724L1900.05 299.242"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1750.67 576.805L1750.67 426.879L1600.74 576.805L1750.67 576.805Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1750.67 576.805L1600.74 426.879L1638.22 464.36L1675.71 501.842"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 426.881L1825.09 576.807L1975.02 426.881L1825.09 426.881Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 426.881L1975.02 576.807L1937.54 539.325L1900.05 501.844"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 634.158L1825.09 784.084L1975.02 634.158L1825.09 634.158Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M1825.09 634.158L1975.02 784.084L1937.54 746.603L1900.05 709.121"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2426.7 166.926L2426.7 17L2276.78 166.926L2426.7 166.926Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2426.7 166.926L2276.78 17L2314.26 54.4815L2351.74 91.9629"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 16.9999L2501.12 166.926L2651.05 16.9999L2501.12 16.9999Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 16.9999L2651.05 166.926L2613.57 129.444L2576.09 91.9628"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 224.279L2501.12 374.205L2651.05 224.279L2501.12 224.279Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 224.279L2651.05 374.205L2613.57 336.724L2576.09 299.242"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2426.7 576.805L2426.7 426.879L2276.78 576.805L2426.7 576.805Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2426.7 576.805L2276.78 426.879L2314.26 464.36L2351.74 501.842"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 426.881L2501.12 576.807L2651.05 426.881L2501.12 426.881Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 426.881L2651.05 576.807L2613.57 539.325L2576.09 501.844"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 634.158L2501.12 784.084L2651.05 634.158L2501.12 634.158Z"
      stroke="black"
      stroke-width="13.593"
    />
    <path
      d="M2501.12 634.158L2651.05 784.084L2613.57 746.603L2576.09 709.121"
      stroke="black"
      stroke-width="13.593"
    />
  </svg>
);

export default function Contact() {
  return (
    // Main section container
    <section className="contact-section" id="contact">
      {/* Background SVG Layer */}
      <div className="contact-background">
        <BackgroundPatternSvg />
      </div>

      {/* Main Content Container (Overlay) */}
      <div className="contact-content-container">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-subtitle">
          I'm always looking for new opportunities to learn and grow. If you'd
          like to get in touch, please don't hesitate to reach out.
        </h3>

        <div className="contact-details">
          {" "}
          {/* Renamed from contact-content */}
          <p className="contact-text">
            Let us create something amazing together.
          </p>
          {/* Make email a mailto link */}
          <a href="mailto:hello@vibhishanranga.com" className="contact-email">
            hello@vibhishanranga.com
          </a>
          <p className="contact-text">
            Or just hit me up and let us talk about tech.
          </p>
          <div className="social-icons">
            {/* Placeholder URLs - replace with actual profile links */}
            {/* Placeholder Image Paths - ensure these exist or use icon library */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/images/social/linkedin.svg"
                alt="LinkedIn"
                className="social-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/images/social/github.svg"
                alt="GitHub"
                className="social-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/images/social/instagram.svg"
                alt="Instagram"
                className="social-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/images/social/twitter.svg"
                alt="Twitter"
                className="social-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="/images/social/discord.svg"
                alt="Discord"
                className="social-icon"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Container */}
      <footer className="contact-footer">
        <p className="footer-text">
          {/* Example Footer Text */}
          Designed by Amoghavarsha Rao & Built by Vibhishan Ranga &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
