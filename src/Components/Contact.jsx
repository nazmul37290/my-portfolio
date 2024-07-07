import { FaLocationDot } from "react-icons/fa6";
import SectionHeading from "../Shared/SectionHeading";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_efpfcbr", "template_4kfw5s3", form.current, {
        publicKey: "O3PqEypvfLMId1qW3",
      })
      .then(
        () => {
          toast.success("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="mt-24">
      <div className="text-center">
        <SectionHeading
          heading={"Contact Me"}
          title={"Don't be shy, Say Me Hello Now"}
        ></SectionHeading>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row mt-10">
        <div className="space-y-4 w-auto lg:w-1/3">
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
        <div className="w-full p-2 lg:p-0 lg:w-2/3">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="flex text-white gap-10">
              <input
                className="p-4 w-full  bg-transparent border-main border rounded-xl"
                type="text"
                name="from_name"
                placeholder="Your Name*"
                required
                id=""
              />
              <input
                type="email"
                required
                name="reply_to"
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                placeholder="Your Email*"
              />
            </div>
            <div className="flex text-white gap-10">
              <input
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                type="number"
                name="phone"
                placeholder="Your Phone"
                required
                id=""
              />
              <input
                type="text"
                className="p-4 w-full bg-transparent border-main border rounded-xl"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <textarea
              className="p-4 w-full text-white bg-transparent border-main border rounded-xl"
              name="message"
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
