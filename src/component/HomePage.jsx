// Home.jsx
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-awesome-reveal";
import Typing from "../assets/js/typing";
import Particle from "../assets/js/particle";
import profileImg from "../assets/images/profile.png";
import About from "./About";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <div id="home" className="w-full relative">
        <Particle />
        <div className="container mx-auto px-3.5 py-16 sm:py-20">
          <div className="flex flex-col gap-2 md:flex-row items-center">
            {/* Left Section */}
            <div className="md:w-2/3 w-full text-center md:text-left space-y-4 sm:space-y-6 ">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-white">
                Hi There!{" "}
                <span
                  role="img"
                  aria-labelledby="wave"
                  className="inline-block"
                >
                  👋🏻
                </span>
              </h1>
              <h2 className="text-2xl sm:text-4xl xl:text-5xl font-semibold text-white">
                I'M{" "}
                <span className="text-primary font-bold">
                  AD AADESH DEVGANIYA
                </span>
              </h2>
              <div className="text-xl sm:text-2xl text-primary font-semibold">
                <Typing />
              </div>

              {/* Social Icons */}
              <ul className="social-icons flex justify-center md:justify-start space-x-4 mt-4">
                <li>
                  <a
                    href="https://github.com/aadeshdevganiya"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-2xl xl:text-3xl"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aadesh-devganiya/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-2xl xl:text-3xl"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_aadesh__devganiyaa__24_?igsh=MXZ5NnJuYTVxN2k2YQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-2xl xl:text-3xl"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/aadesh.devganiya?mibextid=ZbWKwL#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-2xl xl:text-3xl"
                  >
                    <FaFacebookF />
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="md:w-1/3 w-full mt-10 md:mt-0 flex justify-center">
              <Tilt>
                <Fade>
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full max-w-xs rounded-lg shadow-lg"
                  />
                </Fade>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Project />
    </>
  );
};

export default Home;
