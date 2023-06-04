import React,{useEffect} from "react";

import AOS from "aos";
import 'aos/dist/aos.css'
import chat from "../assets/portfolio/chatpage.png"
import boxshadow from "../assets/portfolio/box-shadow.png"
import todo from "../assets/portfolio/todoapp.png"
import foodDapp from "../assets/portfolio/foodelivery.jpeg"
import portfolio from "../assets/portfolio/portfolio.png"

const Portfolio = () => {
   useEffect(() => {
    AOS.init({duration:1500})
  },[])
  const portfolios = [
    {
      id: 1,
      src: chat,
      demo: "https://bechatty.netlify.app",
      code:"https://github.com/Krishnakalani111/ChatAppFrontend"
    },
    {
      id: 2,
      src: foodDapp,
      demo: "https://drive.google.com/file/d/12E3UXNDnxWA4RSzWxRy5HwJ2V60ODhsW/view?usp=drivesdk",
      code:"https://github.com/Krishnakalani111/FoodDeliveryApp"
    },
    {
      id: 3,
      src: portfolio,
      demo: "https://krishnakalani.netlify.app/",
      code:"https://github.com/Krishnakalani111/Portfolio-SPA"
    },
    {
      id: 4,
      src: todo,
      demo: "https://kktodo1.netlify.app",
      code:"https://github.com/Krishnakalani111/reduxTk-TodoApp"
    },
    {
      id: 5,
      src: boxshadow,
      demo: "https://box-shadowgenerator1.netlify.app/",
      code:"https://github.com/Krishnakalani111/box-shadow-generator"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="w-full my-[2rem] text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" data-aos="fade-up">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          {portfolios.map(({ id, src,demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 h-[10rem] w-[22rem] hover:scale-105 object-contain"
              />
              <div className="flex items-center  justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 pr-6 m-4 duration-200 text-center hover:scale-105 border-dotted border-r-[2px]">
                  DEMO
                </a>
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 pr-3 m-4 text-center duration-200 hover:scale-105 ">
                  CODE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
