import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
  

const About = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <div
      name="about"
      className="w-full h-screen  text-white mt-[10.5rem] mb-[16rem]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2" data-aos="fade-up">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20" data-aos="fade-up">
          Hi, my name is Krishna Kalani and I am a software developer. I am
          currently pursuing Btech degree in IT along with a minors degree in
          AI&ML . I have a passion for solving complex problems and creating
          innovative solutions that enhance user experiences. Throughout my
          journey, I have gained adequate amount of experience in JavaScript for client side as
          well as server side, and have worked on a variety of projects such as
          Real time chatting web-app, food delivery app & more.
        </p>

        <br />

        <p className="text-xl" data-aos="fade-up">
          I am a self-motivated individual who is always eager to learn and stay
          up-to-date with the latest trends in software development. Outside of
          learning and making projects, I enjoy playing BasketBall and going to Gym.
          which help me stay creative and focused.
        </p>
      </div>
    </div>
  );
};

export default About;
