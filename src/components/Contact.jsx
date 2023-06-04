import React,{useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" data-aos="fade-up">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center" >
          <form
            action="https://getform.io/f/8f2e3f36-6ab2-4c1d-949a-24c50ccdd268"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            data-aos="fade-up"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <div >
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300" >
              Let's talk
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
