import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function CommonButton({ buttonName, to }) {
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      spy={true}
      className="bg-primary px-6 py-3 uppercase text-white text-sm rounded-full font-medium cursor-pointer"
    >
      {buttonName}
    </ScrollLink>
  );
}
