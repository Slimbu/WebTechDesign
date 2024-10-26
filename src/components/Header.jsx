import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu(); // Close menu after scrolling to top
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
      onClick: scrollToTop, // Custom onClick for Home
    },
    {
      link: "About us",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Plans",
      path: "plans",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact us",
      path: "contact",
    },
  ];

  return (
    <nav className="w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-4xl text-3xl font-bold font-ubuntu">
      Web<span className="text-red-300 italic">Tech</span>
      <span className="text-green-300 italic">Solutions</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path, onClick }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg font-ubuntu text-[15px] transition-transform duration-300 transform hover:scale-110" // Added hover scaling
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            onClick={link === "Home" ? onClick : closeMenu} // Close menu for all except Home
          >
            {link}
          </Link>
        ))}
      </ul>

      

      {/* mobile menu starts */}
      <div
        className="flex justify-center items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-black p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path, onClick }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg w-full text-center transition-transform duration-300 transform hover:scale-150" // Added hover scaling
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={link === "Home" ? onClick : closeMenu} // Close menu for all except Home
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

