import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaEye } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import portfolio from "../assets/images/portfolio.png";
import karmainfotech from "../assets/images/karmainfotech.png";
import textutils from "../assets/images/textutils.png";
import CommonButton from "./CommonButton";
// import hd from "../../images/hd.png";
// import pp from "../../images/portfolio.png";

const projects = [
  {
    title: "Personal Portfolio",
    img: portfolio,
    desc: "Explore my work, skills, and achievements in a concise and visual way.",
    tech: "React , Tailwind css",
    link: "https://aadeshdevganiya.vercel.app/",
  },
  {
    title: "KarmaInfotech",
    img: karmainfotech,
    desc: "Use of AI and Machine Learning to help predict heart disease...",
    tech: "HTML, CSS, JavaScript",
    link: "https://karmainfotech.vercel.app/",
  },
  {
    title: "Textutils",
    img: textutils,
    desc: "Use of AI and Machine Learning to help predict heart disease...",
    tech: "React , css",
    link: "https://textutils-smoky-seven.vercel.app/",
  },
];

export default function () {
  return (
    <section className="py-12 " id="about">
      <div className="container mx-auto px-3.5">
        <h2 class="text-4xl sm:text-6xl xl:text-7xl mb-5 sm:mb-10 font-bold text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-light border border-primary rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="p-4">
                {/* Title */}
                <h5 className="text-lg font-semibold text-primary font-[proximanova]">
                  {project.title}
                </h5>

                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover object-left mt-2 rounded-lg"
                />

                {/* Project Description (slide-in from left) */}
                <div className="absolute top-6 left-0 w-[95%]  bg-primary text-white font-semibold text-sm p-4 rounded-r-2xl transform -translate-x-full translate-y-[40%] group-hover:translate-x-0 transition duration-700 flex items-center justify-center text-center z-10 shadow-lg">
                  {project.desc}
                </div>

                {/* Tech Stack (slide-in from right) */}
                <div className="absolute bottom-16 right-0 transform translate-x-full group-hover:translate-x-0 bg-yellow text-secondary font-semibold text-sm px-4 py-2 rounded-l-xl transition duration-500 delay-200 z-10 shadow-md">
                  {project.tech}
                </div>

                {/* View Button */}
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-lg transition-transform duration-300 group-hover:translate-x-[6px] flex justify-center gap-2 items-center font-[proximanova]"
                  >
                    View <FaEye title="View Project" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/projectspage">
            {/* <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition">
              View All
              <HiArrowRight />
            </button> */}
            <CommonButton buttonName="View all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
