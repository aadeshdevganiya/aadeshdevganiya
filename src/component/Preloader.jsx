import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="scan">
          <div className="fingerprint"></div>
          <h3>Scanning...</h3>
        </div>
      </div>
    </>
  );
};

export default Preloader;
