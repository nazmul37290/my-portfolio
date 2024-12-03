import SectionHeading from "../Shared/SectionHeading";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import { FaFirefoxBrowser, FaServer } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
const Projects = () => {
  return (
    <div id="projects" className="my-24">
      <div className="text-center">
        <SectionHeading
          heading={"Projects"}
          title={"Explore My Web Development Projects"}
        ></SectionHeading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 mt-10">
        <div className="bg-[#272727e6] rounded-2xl p-5  w-full lg:w-[450px] shadow-xl shadow-main">
          <div>
            <img src={project2} className="rounded-2xl" alt="" />
          </div>
          <div className="my-2">
            <h3 className="text-white font-bold text-2xl">Unity Serve</h3>
            <p className="text-gray-400 font-medium">
              A volunteer management Website.
            </p>
          </div>
          <div className="text-xl mt-5 text-main w-full flex justify-around">
            <a
              href="https://unityserve-ee43d.web.app/"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Live site"
            >
              <FaFirefoxBrowser></FaFirefoxBrowser>
            </a>
            <a
              href="https://github.com/nazmul37290/unityserve-client"
              title="Client Side Code"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
            >
              <FaComputer></FaComputer>
            </a>
            <a
              href="https://github.com/nazmul37290/unityserve-server"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Server Side Code"
            >
              <FaServer></FaServer>
            </a>
          </div>
        </div>
        <div className="bg-[#272727e6] rounded-2xl p-5   w-full lg:w-[450px] shadow-xl shadow-main">
          <div>
            <img src={project3} className="rounded-2xl" alt="" />
          </div>
          <div className="my-2">
            <h3 className="text-white font-bold text-2xl">Survey Stream</h3>
            <p className="font-medium text-gray-400">
              This is a survey creation and management website
            </p>
          </div>
          <div className="text-xl mt-5 text-main w-full flex justify-around">
            <a
              href="https://survey-stream.web.app/"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Live site"
            >
              <FaFirefoxBrowser></FaFirefoxBrowser>
            </a>
            <a
              href="https://github.com/nazmul37290/survey-website-client"
              title="Client Side Code"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
            >
              <FaComputer></FaComputer>
            </a>
            <a
              href="https://github.com/nazmul37290/survey-website-server"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Server Side Code"
            >
              <FaServer></FaServer>
            </a>
          </div>
        </div>
        <div className="bg-[#272727e6] rounded-2xl p-5   w-full lg:w-[450px] shadow-xl shadow-main">
          <div>
            <img src={project1} className="rounded-2xl" alt="" />
          </div>
          <div className="my-2">
            <h3 className="text-white font-bold text-2xl">Jute And Wood</h3>
            <p className="text-gray-400 font-medium">
              An arts and crafts related website
            </p>
          </div>
          <div className="text-xl mt-5 text-main w-full flex justify-around">
            <a
              href="https://juteandwood.web.app/"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Live site"
            >
              <FaFirefoxBrowser></FaFirefoxBrowser>
            </a>
            <a
              href="https://github.com/nazmul37290/juteandwood-client"
              title="Client Side Code"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
            >
              <FaComputer></FaComputer>
            </a>
            <a
              href="https://github.com/nazmul37290/juteandwood-server"
              className="border-x py-2 rounded-full shadow-md shadow-main border-main px-6"
              title="Server Side Code"
            >
              <FaServer></FaServer>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
