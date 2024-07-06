import { FaLocationDot } from "react-icons/fa6";
import SectionHeading from "../Shared/SectionHeading";
import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-24">
      <div className="text-center">
        <SectionHeading
          heading={"Contact Me"}
          title={"Don't be shy, Say Me Hello Now"}
        ></SectionHeading>
      </div>
      <div className="flex mt-10">
        <div className="space-y-4 w-1/3">
          <div className="flex items-center gap-5">
            <div className="text-3xl bg-[#272727e6] text-main p-5 rounded-full">
              <FaLocationDot></FaLocationDot>
            </div>
            <div className="text-lg">
              <p className="font-bold text-white">Address</p>
              <p className=" text-gray-400">Bogura, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-3xl bg-[#272727e6] text-main p-5 rounded-full">
              <FaPhoneAlt></FaPhoneAlt>
            </div>
            <div className="text-lg">
              <p className="font-bold text-white">Phone</p>
              <p className=" text-gray-400">+8801737290293</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-3xl bg-[#272727e6] text-main p-5 rounded-full">
              <FaEnvelope></FaEnvelope>
            </div>
            <div className="text-lg">
              <p className="font-bold text-white">Address</p>
              <p className=" text-gray-400">Bogura, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <form className="space-y-5">
            <div className="flex gap-10">
              <input
                className="p-4 w-full  bg-transparent border-main border rounded-xl"
                type="text"
                name=""
                placeholder="Your Name*"
                required
                id=""
              />
              <input
                type="email"
                required
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                placeholder="Your Email*"
              />
            </div>
            <div className="flex gap-10">
              <input
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                type="number"
                name=""
                placeholder="Your Phone"
                required
                id=""
              />
              <input
                type="text"
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                placeholder="Subject"
              />
            </div>
            <textarea
              className="p-4 w-full bg-transparent border-main border rounded-xl"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your message*"
            ></textarea>
            <input
              type="submit"
              className="bg-main py-2 px-4 text-black rounded-full font-medium"
              value="Send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
