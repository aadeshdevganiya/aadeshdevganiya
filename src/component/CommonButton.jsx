import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function CommonButton({ buttonName, to, scrollLink }) {
  if (scrollLink) {
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

  return (
    <Link
      to={to}
      className="bg-primary px-6 py-3 uppercase text-white text-sm rounded-full font-medium cursor-pointer"
    >
      {buttonName}
    </Link>
  );
}
