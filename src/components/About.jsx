import React, { useEffect } from "react";
import about from "../assets/about.svg";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="about"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm-px-20"
    >
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={about}
          alt=""
          className="lg:w-[1000px] lg:h-[550px]"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col justify-center items-start gap-4"
      >
        <h1 className=" text-lime-500 font-ubuntu text-[30px] font-semibold">
          WHO ARE WE
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[80px] font-ubuntu">
          The leading social media marketing agency
        </h1>
        <p className="font-ubuntu text-[18px] text-slate-700">
          Crafting compelling digital experiences that captivate audiences and
          drive meaningful connections our digital agency combines innovation,
          strategy, and expertise to fuel your online success.
        </p>
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className=" text-limegreen size-6" />
            Analyze your chances against your competitors
          </p>
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className=" text-limegreen size-6" />
            Extract insights to understand what works
          </p>
          <p className="text-black flex justify-center items-center gap-4 font-ubuntu">
            <FaChevronCircleRight className=" text-limegreen size-6" />
            Implement changes based on data-driven
          </p>
        </div>
        <button className="bg-red-300 px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:text-white">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
