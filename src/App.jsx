import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
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
