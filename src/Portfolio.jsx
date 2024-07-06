import About from "./Components/About";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

const Portfolio = () => {
  return (
    <div>
      <Home></Home>
      <div className="max-w-screen-2xl mx-auto">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
      </div>
    </div>
  );
};

export default Portfolio;
