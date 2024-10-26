import React, { useEffect } from "react";
import { pricingplan } from "../export";
import { FaChevronCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="plans"
      className="w-[90%] m-auto flex flex-col justify-center items-center gap-2 py-20" // Ensure it's centered
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-lime-300 font-ubuntu text-[17px] font-bold"
      >
        PRICING PLAN
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[50px] text-center font-ubuntu"
      >
        Choose your perfect plan
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-10"
      >
        {pricingplan.map((item, index) => (
          <div
            key={index}
            className="bg-black p-10 rounded-3xl flex flex-col justify-center items-start gap-4 lg:w-[35%] w-full"
          >
            <h1 className="text-white text-2xl font-semibold font-ubuntu">
              {item.type}
            </h1>
            <p className="text-white text-lg font-ubuntu">{item.about}</p>
            <h1 className="text-lime-300 font-bold text-[55px] font-ubuntu">
              {item.price}
              <span className="text-lime-300 text-lg pl-2 font-ubuntu">
                Monthly
              </span>
            </h1>
            <button className="w-full bg-lime-300 font-semibold rounded-xl px-6 py-3 text-lg hover:bg-white hover:text-black font-ubuntu">
              {item.label}
            </button>
            <p className="text-white text-lg font-semibold font-ubuntu">
              {item.specs}
            </p>
            <div className="flex flex-col justify-center items-start gap-4">
              {item.features.map((feature, idx) => (
                <p key={idx} className="text-white flex justify-center items-center gap-4 font-ubuntu">
                  <FaChevronCircleRight className="text-lime-300 size-6" /> {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

