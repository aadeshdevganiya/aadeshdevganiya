import React, { useState } from "react";
import profileImg from "../assets/images/profile.png";
import CommonButton from "./CommonButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 py-3 bg-secondary text-white">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        {/* Logo */}
        <div className="logo z-50">
          <a href="/" className="flex items-center">
            <img
              src={profileImg}
              alt="brand"
              className="w-auto h-auto max-h-10 object-contain"
            />
            <h5 className="ml-5 uppercase font-medium text-lg text-white">
              Aadesh Devganiya
            </h5>
          </a>
        </div>

        {/* Burger Menu */}
        <div
          onClick={toggleMenu}
          className="lg:hidden z-50 flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative"
        >
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded   transition-all duration-500 ease-in-out ${
              isMenuOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded  transition-all duration-500 ease-in-out ${
              isMenuOpen ? "!w-0" : "translate-y-0"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-white rounded  transition-all duration-500 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>

        {/* Nav Menu */}
        <nav
          className={`fixed lg:static top-0 right-0 bottom-0 w-full sm:w-1/2 lg:w-auto h-screen lg:h-auto bg-secondary lg:bg-transparent px-7 pt-20 lg:pt-0 z-40 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row h-full lg:h-auto font-medium gap-6 lg:items-center lg:gap-10 xl:gap-11 py-4 lg:px-9">
            <li>
              <a href="index.html" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="pricing.html" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="faq.html" className="hover:text-primary">
                Skills
              </a>
            </li>
            <li>
              <a href="contact.html" className="hover:text-primary">
                Project
              </a>
            </li>
            <li>
              <a href="try-free.html" className="hover:text-primary">
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <CommonButton buttonName="Contact us" />
        </div>
      </div>
    </nav>
  );
}
