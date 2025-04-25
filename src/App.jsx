import "./App.css";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Introduction />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
