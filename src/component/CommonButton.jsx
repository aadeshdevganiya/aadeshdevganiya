import React from "react";

export default function CommonButton({ buttonName }) {
  return (
    <>
      <a
        href=""
        className="bg-primary px-6 py-3 uppercase text-white text-sm rounded-full font-medium"
      >
        {buttonName}
      </a>
    </>
  );
}
