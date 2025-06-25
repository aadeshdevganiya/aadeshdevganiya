import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Zoom } from "react-awesome-reveal";

export default function SocialMedia() {
  return (
    <div className="mt-10 text-center">
      <div class="text-center mb-5 sm:mb-10">
        <h2 class="text-2xl md:text-4xl font-bold text-white">
          Connect with me
        </h2>
      </div>
      <div className="flex gap-6 sm:gap-12 flex-wrap justify-evenly">
        <a
          href="https://www.instagram.com/_aadesh__devganiyaa__24_?igsh=MXZ5NnJuYTVxN2k2YQ=="
          target="_blank"
          rel="noreferrer"
          className="text-white text-7xl sm:text-8xl p-5 rounded-md bg-primary hover:scale-110 transition duration-300"
        >
          <Zoom triggerOnce>
            <AiOutlineInstagram />
          </Zoom>
        </a>

        <a
          href="https://www.facebook.com/aadesh.devganiya?mibextid=ZbWKwL#"
          target="_blank"
          rel="noreferrer"
          className="text-white text-7xl sm:text-8xl p-5 rounded-md bg-primary hover:scale-110 transition duration-300"
        >
          <Zoom triggerOnce>
            <AiFillFacebook />
          </Zoom>
        </a>

        <a
          href="https://github.com/aadeshdevganiya"
          target="_blank"
          rel="noreferrer"
          className="text-white text-7xl sm:text-8xl p-5 rounded-md bg-primary hover:scale-110 transition duration-300"
        >
          <Zoom triggerOnce>
            <AiFillGithub />
          </Zoom>
        </a>

        <a
          href="https://www.linkedin.com/in/aadesh-devganiya/"
          target="_blank"
          rel="noreferrer"
          className="text-white text-7xl sm:text-8xl p-5 rounded-md bg-primary hover:scale-110 transition duration-300"
        >
          <Zoom triggerOnce>
            <AiFillLinkedin />
          </Zoom>
        </a>
      </div>
    </div>
  );
}
