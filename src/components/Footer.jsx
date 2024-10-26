import React from "react";
import {
  FaMapMarkedAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold font-ubuntu text-[40px] leading-[50px]">
            Let's Start working together get in touch!
          </h1>
          <button className="bg-red-300 px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">
            Get Started Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <FaMapMarkedAlt className="text-red-300 size-6" />{" "}
              <span className="text-[16px] font-ubuntu text-slate-100">
              Tower Bridge Rd, London SE1 2UP
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-red-300 size-6" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                +44 7323163469
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoIosMailOpen className="text-red-300 size-6" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                support@gmail.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-red-300 size-6" />
              <span className="text-[16px] font-ubuntu text-slate-100">
                10:00am - 17:00pm
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-white text-2xl font-ubuntu font-semibold">
            Subscribe Newsletter
          </h1>
          <p className="text-[16px] font-ubuntu text-slate-100">
            To keep up with the latest update
          </p>
          <div className="flex flex-col justify-center items-start gap-6 w-full">
            <input
              type="email"
              placeholder="Enter your valid email"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu text-white"
            />
            <button className="bg-red-300 px-6 py-4 rounded-xl text-[17px] font-semibold font-ubuntu hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-black m-auto border-y-2 border-slate-600 grid lg:grid-cols-3 grid-cols-1 justify-between items-center lg:gap-28 gap-8 py-6 px-20">
        <div>
          <h1 className="text-white text-[17px] font-ubuntu text-center">
            Copyright © 2024, All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-3xl text-center font-ubuntu font-bold">
            Web<span className="text-red-300 italic">Tech</span>
            <span className="text-green-300 italic">Solutions</span>
          </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-red-300 w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-red-300 w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-red-300 w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube className="text-red-300 w-6 h-6" />
          </a>
        </div>
      </section>

      {/* scroll to top button  */}
      <div
        id="icon-box"
        className="bg-red-300 text-black p-3 rounded-full hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="w-[35px] h-[35px]" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
