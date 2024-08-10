import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/logo portfolio.png";
const Footer = () => {
  return (
    <div className="bg-[#272727e6]  flex flex-col lg:flex-row gap-5 lg:gap-0 justify-around mt-24 p-5 lg:p-24">
      <div>
        <img src={logo} className="w-28" alt="" />
        <p className="text-gray-400"> &copy; All rights reserved by Nazmul </p>
      </div>
      <div className="text-gray-400 flex flex-col">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills </a>
        <a href="#projects">Projects </a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="text-gray-400 flex flex-col">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h3 className="text-main font-medium text-2xl mb-5">Socials</h3>
        <div className="text-white text-2xl flex gap-3">
          <a href="https://www.facebook.com/nazmulhaquenhz">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://github.com/nazmul37290">
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
