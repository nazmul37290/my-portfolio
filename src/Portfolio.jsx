import { ToastContainer } from "react-toastify";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const Portfolio = () => {
  return (
    <div className="p-2 lg:p-0">
      <ToastContainer />
      <Home></Home>

      <div className="max-w-screen-2xl mx-auto">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Portfolio;
