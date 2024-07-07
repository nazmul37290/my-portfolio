import SectionHeading from "../Shared/SectionHeading";
import html from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import js from "../assets/images/js2.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import mongo from "../assets/images/mongo.png";
import bootstrap from "../assets/images/bootstrap.png";
import github from "../assets/images/github.png";
import jwt from "../assets/images/jwt.png";
import firebase from "../assets/images/firebase.png";
import figma from "../assets/images/figma.png";
import photoshop from "../assets/images/photoshop.png";

const Skills = () => {
  return (
    <div id="skills" className="mt-24">
      <div className="text-center">
        <SectionHeading
          heading={"Skills"}
          title={"I Work To Update My Skills"}
        ></SectionHeading>
      </div>
      <div>
        <h3 className="my-4 font-bold text-2xl text-white">Expert</h3>
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6">
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={html} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon  bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={CSS} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={js} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={react} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={tailwind} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={bootstrap} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-4 font-bold text-2xl text-white">Comfortable</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={node} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={express} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={mongo} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={jwt} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={github} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={firebase} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-4 font-bold text-2xl text-white">Familiar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mx-auto">
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={photoshop} className="w-full h-full" alt="" />
            </div>
          </div>
          <div className="hexagon bg-[#272727e6] mx-auto md:mx-0 flex items-center justify-center  h-[200px] w-[200px]">
            <div className="w-[100px] h-[100px] ">
              <img src={figma} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
