import About from "./Components/About";
import Home from "./Components/Home";

const Portfolio = () => {
  return (
    <div>
      <Home></Home>
      <div className="max-w-screen-2xl mx-auto">
        <About></About>
      </div>
    </div>
  );
};

export default Portfolio;
