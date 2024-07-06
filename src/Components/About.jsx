import { Button } from "antd";
import SectionHeading from "../Shared/SectionHeading";
import image from "../assets/images/me2.jpeg";
import { FaDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col lg:flex-row justify-center py-24  items-center gap-10"
      >
        <div className="flex justify-center w-1/2">
          <div className="">
            <SectionHeading
              heading={"About me"}
              title={"Web Developer"}
            ></SectionHeading>
            <div className="w-[400px] h-[400px] mt-10 clip-path">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10">
          <h2 className="font-bold text-white text-2xl">
            Personal Information
          </h2>
          <p className="text-gray-400 mt-5 w-2/3">
            I am a dedicated web developer with strong proficiency in HTML, CSS,
            JavaScript, and React. With a solid foundation in front-end
            technologies, I create dynamic and responsive web applications.
            Additionally, I have basic knowledge of Express.js and Node.js,
            enabling me to work on full-stack projects and understand
            server-side development.
          </p>
          <table className="text-start mt-5 w-full">
            <tr className="font-bold text-white">
              <td>Name</td>
              <td>Location</td>
            </tr>
            <tr className="text-gray-400">
              <td>Nazmul Haque</td>
              <td>Bogura, Bangladesh</td>
            </tr>
            <tr className="font-bold text-white">
              <td>Phone</td>
              <td>Education</td>
            </tr>
            <tr className="text-gray-400">
              <td>+8801737290293</td>
              <td>Diploma-in-Engineering (Computer Technology)</td>
            </tr>
            <tr className="font-bold text-white">
              <td>Email</td>
              <td>Age</td>
            </tr>
            <tr className="text-gray-400">
              <td>nazmulnjm@gmail.com</td>
              <td>20</td>
            </tr>
          </table>
          <Button
            href="web_developer_resume_Nazmul.pdf"
            className=" mt-10 bg-main text-black font-medium border-main"
            type="default"
            shape="round"
            icon={<FaDownload></FaDownload>}
            size={"large"}
          >
            Resume
          </Button>
        </div>
      </div>
    </>
  );
};

export default About;
