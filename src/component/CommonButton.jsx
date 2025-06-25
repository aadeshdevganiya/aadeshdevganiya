import React from "react";
import { Link } from "react-router-dom";

export default function CommonButton({ buttonName }) {
  return (
    <>
      <Link
        target=""
        className="bg-primary px-6 py-3 uppercase text-white text-sm rounded-full font-medium"
      >
        {buttonName}
      </Link>
    </>
  );
}
