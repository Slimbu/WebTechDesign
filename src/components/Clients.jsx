import React, { useEffect } from "react";
import testimonials from "../assets/testimonial.svg";
import { FaQuoteLeft } from "react-icons/fa";
import { testidata } from "../export";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20 sm-px-20"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={testimonials}
          alt=""
          className="lg:w-[1000px] lg:h-[550px]"
        />
      </div>
      <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center gap-4">
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className=" text-lime-500 font-ubuntu text-[30px] font-bold"
        >
          TESTIMONIALS
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu text-center"
        >
          What Our Clients Says
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          id=""
          className="w-full mt-10"
        >
          <Slider {...settings}>
            {testidata.map((item, index) => (
              <div key={index}>
                <div
                  key={index}
                  className="w-full flex justify-between items-start gap-6"
                >
                  <div>
                    <div id="icon-box" className="bg-black p-6 rounded-full">
                      <FaQuoteLeft className="text-red-300 size-[35px]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-ubuntu text-xl text-justify">
                      {item.review}
                    </p>
                    <div>
                      <h1 className="text-black font-semibold text-[25px]">
                        {item.name}
                      </h1>
                      <p className="text-lg">{item.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
