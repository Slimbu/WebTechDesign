import React, { useEffect } from "react";
import { servicesinfo } from "../export";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="services"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-10 sm-px-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="bg-black lg:p-20 p-10 flex lg:flex-row flex-col justify-center items-center gap-20 rounded-3xl"
      >
        {servicesinfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-6"
          >
            <img src={item.icon} alt="" className="size-24" />
            <h1 className="text-[26px] text-white font-semibold font-ubuntu">
              {item.title}
            </h1>
            <p className="font-ubuntu text-[18px] text-slate-200">
              {item.about}
            </p>
            <button className="text-red-300 font-ubuntu font-semibold text-[18px] flex justify-center items-center gap-3">
              {item.label} <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
