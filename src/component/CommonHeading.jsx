import React from "react";

export default function CommonHeading({ headingname }) {
  return (
    <h2 className="text-4xl sm:text-6xl xl:text-7xl mb-5 sm:mb-10 font-bold text-white">
      {headingname}
    </h2>
  );
}
