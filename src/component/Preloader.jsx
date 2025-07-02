import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="scan relative flex flex-col items-center">
          <div className="fingerprint relative w-[150px] sm:w-[300px] h-[210px] sm:h-[380px] bg-cover"></div>
          <h3>Scanning...</h3>
        </div>
      </div>
    </>
  );
};

export default Preloader;
