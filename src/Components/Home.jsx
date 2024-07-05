import { Button } from "antd";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import image from "../assets/images/me.png";
const Home = () => {
  return (
    <div>
      {/* Home section */}
      <section>
        <nav className="flex justify-between  px-5 py-4">
          <div>
            <h3 className="text-main text-2xl font-bold">NazmulHaque</h3>
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-white text-2xl flex gap-3">
              <a href="">
                <FaFacebook></FaFacebook>
              </a>
              <a href="">
                <FaGithub></FaGithub>
              </a>
              <a href="">
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
            <Button
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
      <section className="max-w-screen-xl h-[800px] flex justify-between items-center mx-auto">
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
        <div className="relative ">
          <div className="h-[500px] w-[500px] my-auto bg-main rounded-full"></div>
          <img
            className="absolute  z-10 -top-16 left-10 drop-shadow-2xl "
            src={image}
            alt=""
          />
        </div>
      </section>
      <div className="bg-[#202020] relative  h-[150px] w-full -top-28 z-20 text-main"></div>
    </div>
  );
};

export default Home;
