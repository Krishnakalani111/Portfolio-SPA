import React,{useEffect} from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import 'aos/dist/aos.css'
import profile from "../assets/portfolio/profile.png"

  //bg-gradient-to-b from-black via-black to-gray-800

const Home = () => {
   useEffect(() => {
    AOS.init({duration:3000})
  },[])
 
  return (
    <div
      name="home"
      className="h-screen w-full mb-[2rem]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full w-[100%]">
          <h2 className="text-2xl sm:text-6xl font-bold text-white">
            I'm a <span style={{ fontWeight: "bold",color:"pink" }}>
              <Typewriter words={['Developer', 'Programmer', 'ML-Newbie']}
            loop={100}
            typeSpeed={145}
            deleteSpeed={90}
            delaySpeed={1000} />
            </span>
            <span style={{color:"red"}}>
              <Cursor/>
            </span>
           
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Express and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-[40%] my-auto" data-aos="fade-left">
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
