import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import portfolio from "../assets/images/portfolio.jpg";
import karmainfotech from "../assets/images/karmainfotech.jpg";
// import textutils from "../assets/images/textutils.webp";
import CommonButton from "./CommonButton";
import CommonHeading from "./CommonHeading";
import emailsignature from "../assets/images/emailsignature.jpg";

const projects = [
  {
    title: "Email Signature",
    img: emailsignature,
    desc: "Explore my work, skills, and achievements in a concise and visual way.",
    tech: "Tailwind CSS",
    link: "https://aadeshdevganiya.github.io/Email-signature/src/index.html",
  },
  {
    title: "Personal Portfolio",
    img: portfolio,
    desc: "Explore my work, skills, and achievements in a concise and visual way.",
    tech: "React, Tailwind CSS",
    link: "https://aadeshdevganiya.vercel.app/",
  },
  {
    title: "KarmaInfotech",
    img: karmainfotech,
    desc: "User-friendly interface – Clean, responsive design built with HTML, CSS, and JavaScript.",
    tech: "HTML, CSS, JavaScript",
    link: "https://karmainfotech.vercel.app/",
  },
  // {
  //   title: "Textutils",
  //   img: textutils,
  //   desc: "A React-based tool to analyze and transform text—convert cases, remove spaces, count words, and more.",
  //   tech: "React, CSS",
  //   link: "https://textutils-smoky-seven.vercel.app/",
  // },
];

export default function Projects() {
  return (
    <section className="pb-20" id="project">
      <div className="container mx-auto px-3.5">
        <CommonHeading headingname="Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-primary border border-primary rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white font-[proximanova]">
                  {project.title}
                </h3>

                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover object-left mt-2 rounded-lg"
                  width={100}
                  height={100}
                />

                <div className="absolute top-6 left-0 w-[95%] bg-primary text-white font-semibold text-sm p-4 rounded-r-2xl transform -translate-x-full translate-y-[40%] group-hover:translate-x-0 transition duration-700 flex items-center justify-center text-center z-10 shadow-lg">
                  {project.desc}
                </div>

                <div className="absolute bottom-16 right-0 transform translate-x-full group-hover:translate-x-0 bg-yellow text-secondary font-semibold text-sm px-4 py-2 rounded-l-xl transition duration-500 delay-200 z-10 shadow-md">
                  {project.tech}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-lg transition-transform duration-300 group-hover:translate-x-[6px] flex justify-center gap-2 items-center font-[proximanova]"
                  >
                    View <FaEye />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CommonButton
            buttonName="View all"
            to="/projectpage"
            scrollLink={false}
          />
        </div>
      </div>
    </section>
  );
}
