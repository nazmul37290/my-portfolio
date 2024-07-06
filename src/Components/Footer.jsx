import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#272727e6]  flex justify-around mt-24 p-24">
      <div>
        <h1 className="font-bold text-main text-3xl">Nazmul Haque</h1>
        <p className="text-gray-400"> &copy; All rights reserved by Nazmul </p>
      </div>
      <div className="text-gray-400 flex flex-col">
        <a href="#home" target="_blank">
          Home
        </a>
        <a href="#about" target="_blank">
          About
        </a>
        <a href="#skills" target="_blank">
          Skills{" "}
        </a>
        <a href="#projects" target="_blank">
          Projects{" "}
        </a>
        <a href="#education" target="_blank">
          Education
        </a>
        <a href="#contact" target="_blank">
          Contact
        </a>
      </div>
      <div className="text-gray-400 flex flex-col">
        <a href="#home" target="_blank">
          Home
        </a>
        <a href="#about" target="_blank">
          About
        </a>
        <a href="#skills" target="_blank">
          Skills
        </a>
        <a href="#projects" target="_blank">
          Projects
        </a>
        <a href="#education" target="_blank">
          Education
        </a>
        <a href="#contact" target="_blank">
          Contact
        </a>
      </div>
      <div>
        <h3 className="text-main font-medium text-2xl mb-5">Socials</h3>
        <div className="text-white text-2xl flex gap-3">
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
      </div>
    </div>
  );
};

export default Footer;
