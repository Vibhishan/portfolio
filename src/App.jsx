import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import MobileWarning from "./components/MobileWarning";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileWarningDismissed, setIsMobileWarningDismissed] =
    useState(false);
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  // Check for mobile device on initial load
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      setShowMobileWarning(isMobile);
    };

    checkMobile();

    // Re-check if window is resized
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleMobileWarningDismiss = () => {
    setIsMobileWarningDismissed(true);
  };

  return (
    <>
      {showMobileWarning && !isMobileWarningDismissed ? (
        <MobileWarning onDismiss={handleMobileWarningDismiss} />
      ) : isLoading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <NavBar />
          <Introduction />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
