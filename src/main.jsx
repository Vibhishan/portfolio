import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init({
  duration: 600, // Reduced from 800ms to 600ms for faster animation
  once: true, // Only animate elements once
  offset: 80, // Slightly reduced offset for quicker trigger
  easing: "ease-out-quart", // Changed to quart for smoother feel
  anchorPlacement: "top-bottom", // Triggers when the top of element reaches bottom of viewport
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
