import React from "react";

export default function CommonHeading({ headingname }) {
  return (
    <>
      <h2 class="text-4xl sm:text-6xl xl:text-7xl mb-2 font-bold text-white">
        {headingname}
      </h2>
    </>
  );
}
