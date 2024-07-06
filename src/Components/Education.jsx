import SectionHeading from "../Shared/SectionHeading";
import bpi from "../assets/images/bpi.png";

const Education = () => {
  return (
    <div className="pt-24">
      <div className="text-center">
        <SectionHeading
          title={"Don't Hesitate to Discover My Educational Pathway"}
          heading={"Education"}
        ></SectionHeading>
      </div>
      <div className="flex gap-10 mt-10 items-center ">
        {/* card one */}
        <div className="flex items-center justify-between bg-[#272727e6] w-1/2 rounded-2xl p-10  ">
          <div className="">
            <p className="text-main font-medium text-lg">2019-2023</p>
            <h2 className="text-white font-bold text-2xl my-2">
              Diploma in Engineering
            </h2>
            <p className="text-gray-400 font-medium">
              Bogra polytechnic Institute
            </p>
            <p className="text-gray-400 font-medium">Computer Technology</p>
            <p className="text-gray-400 font-medium">CGPA: 3.5 (4.00)</p>
          </div>
          <div className="w-[150px] ">
            <img src={bpi} alt="" />
          </div>
        </div>
        {/* card two */}
        <div className="bg-[#272727e6] flex items-center justify-between w-1/2 rounded-2xl p-10  ">
          <div>
            <p className="text-main font-medium text-lg">2019</p>
            <h2 className="text-white font-bold text-2xl my-2">
              Secondary School Certificate
            </h2>
            <p className="text-gray-400 font-medium">Adarsha School Bogura</p>
            <p className="text-gray-400 font-medium">Science</p>
            <p className="text-gray-400 font-medium">GPA: 4.94 (5.00)</p>
          </div>
          <div className="w-[150px] ">
            <img src={bpi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
