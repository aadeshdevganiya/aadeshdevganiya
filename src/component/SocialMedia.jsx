import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Zoom } from "react-awesome-reveal";

export default function SocialMedia() {
  const icons = [
    {
      href: "https://www.instagram.com/_aadesh__devganiyaa__24_?igsh=MXZ5NnJuYTVxN2k2YQ==",
      icon: <AiOutlineInstagram />,
    },
    {
      href: "https://www.facebook.com/aadesh.devganiya?mibextid=ZbWKwL#",
      icon: <AiFillFacebook />,
    },
    {
      href: "https://github.com/aadeshdevganiya",
      icon: <AiFillGithub />,
    },
    {
      href: "https://www.linkedin.com/in/aadesh-devganiya/",
      icon: <AiFillLinkedin />,
    },
  ];

  return (
    <div className="mt-10 text-center">
      <div className="mb-5 sm:mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Connect with me
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
        {icons.map((item, index) => (
          <Zoom key={index} triggerOnce>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-white text-7xl sm:text-8xl p-5 rounded-md bg-primary hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          </Zoom>
        ))}
      </div>
    </div>
  );
}
