import { Button } from "antd";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import image from "../assets/images/me.png";
import logo from "../assets/images/logo portfolio.png";
import Particles from "../../Particles";
const Home = () => {
  return (
    <div className="relative">
      {/* Home section */}
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <Particles />
      </div>
      <section id="home" className="px-10 overflow-hidden">
        <nav className="flex justify-between items-center px-2 md:px-5 py-4">
          <div>
            <img src={logo} className="w-20" alt="" />
          </div>
          <div className="text-white hidden md:block space-x-5 font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills </a>
            <a href="#projects">Projects </a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex gap-8  items-center">
            <div className="text-white hidden text-2xl lg:flex gap-3">
              <a href="https://www.facebook.com/nazmulhaquenhz">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://github.com/nazmul37290-">
                <FaGithub></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/nazmul-haque-nhz/">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
            <Button
              href="web_developer_resume_Nazmul.pdf"
              className="text-white bg-transparent border-main"
              type="default"
              shape="round"
              icon={<FaDownload></FaDownload>}
              size={"large"}
            >
              Resume
            </Button>
          </div>
        </nav>
      </section>
      <section className="max-w-screen-xl  h-[800px] flex flex-col lg:flex-row  lg:justify-between items-center mx-auto">
        {/* left side  */}
        <div>
          <p className="text-main text-xl  font-bold">Hello, I am</p>
          <div
            style={{
              paddingTop: "",
              margin: "auto 0",
              fontWeight: "normal",
            }}
          >
            <p
              className="text-white text-6xl"
              style={{ color: "main", fontWeight: "bold" }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["NAZMUL HAQUE"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p
              className="text-gray-400 text-2xl mt-4"
              style={{ color: "main", fontWeight: "bold" }}
            >
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Web Developer from Bangladesh"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
              />
            </p>
          </div>
          <Button
            className=" bg-main mt-10 font-semibold border-main"
            type="default"
            shape="round"
            size={"large"}
          >
            Lets Work
          </Button>
        </div>
        {/* right side  */}
        <div className="relative mt-10">
          <div className="h-[250px] w-[250px] md:h-[500px] md:w-[500px] my-auto bg-main rounded-full"></div>
          <img
            className="absolute  z-10 top-0 lg:-top-16 md:left-10 drop-shadow-2xl "
            src={image}
            alt=""
            loading="lazy"
          />
        </div>
      </section>
      <div className="bg-[#202020] relative  h-[150px] w-full -top-28 md:-top-20 lg:-top-28 z-20 text-main"></div>
    </div>
  );
};

export default Home;
