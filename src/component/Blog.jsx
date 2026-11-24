import React from "react";
import Particle from "../component/Particle";

export default function Blog() {
  return (
    <section className="container mx-auto relative min-h-screen flex items-center justify-center">
      <Particle />
      <div className="absolute inset-0 flex justify-center items-center">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_10jxod3a.json"
          background="transparent"
          speed="1"
          style={{ width: "80%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
  );
}
