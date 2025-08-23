import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import profileImg from "../assets/images/profile.webp";
import CommonButton from "./CommonButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full py-3 text-white">
      <div className="container mx-auto px-3.5 flex justify-between items-center">
        <div className="z-50">
          <Link to="/" className="flex items-center">
            <img
              src={profileImg}
              alt="Aadesh Devganiya"
              className="w-auto h-auto max-h-10 object-contain"
            />
            <h6 className="ml-5 font-medium text-3xl tracking-wide text-white font-secondary">
              Aadesh Devganiya
            </h6>
          </Link>
        </div>

        <div
          onClick={toggleMenu}
          className="lg:hidden z-50 flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-500 ease-in-out ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-500 ease-in-out ${
              isMenuOpen ? "!w-0" : "translate-y-0"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded transition-all duration-500 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>

        <div
          className={`fixed lg:static top-0 right-0 bottom-0 w-full sm:w-1/2 lg:w-auto bg-secondary lg:bg-transparent px-7 pt-20 lg:pt-0 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row h-full lg:h-auto font-medium gap-6 lg:items-center lg:gap-10 xl:gap-11 py-4 lg:px-9">
            <li>
              <Link to="/" onClick={closeMenu} className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={closeMenu}
                className="hover:text-primary cursor-pointer"
                activeClass="text-primary"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="Experiance"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="hover:text-primary cursor-pointer"
                spy={true}
                activeClass="text-primary"
              >
                Experiance
              </Link>
            </li>
            <li>
              <Link
                to="/projectpage"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={closeMenu}
                className="hover:text-primary cursor-pointer"
                spy={true}
                activeClass="text-primary"
              >
                Project
              </Link>
            </li>
            <div className="block lg:hidden mt-2">
              <CommonButton
                buttonName="Contact us"
                to="contact"
                scrollLink={true}
              />
            </div>
          </ul>
        </div>

        <div className="hidden lg:block">
          <CommonButton
            buttonName="Contact us"
            to="contact"
            scrollLink={true}
          />
        </div>
      </div>
    </nav>
  );
}
