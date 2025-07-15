import React from "react";
import resumeImage from "../assets/images/Aadeshresume.png";

export default function Resume() {
  return (
    <section className="py-15 sm:py-20" id="resume">
      <div className="container mx-auto px-3.5 text-center">
        <h2 className="text-4xl sm:text-6xl xl:text-7xl mb-5 sm:mb-6 font-bold text-white">
          Resume
        </h2>
        <p className="text-center text-base sm:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto">
          Explore my professional background and accomplishments by downloading
          my detailed resume. It highlights my skills, experience, and
          qualifications.
        </p>
        <div className="flex justify-center">
          <a
            href="/Aadesh_Resume.pdf"
            download
            className="bg-primary px-6 py-3 uppercase text-white text-sm rounded-full font-medium cursor-pointer"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={resumeImage}
            alt="Resume Image"
            className="w-full sm:w-2/3 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
