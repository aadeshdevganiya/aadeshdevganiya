// src/component/AboutContent.jsx

import { Fade, Slide } from "react-awesome-reveal";
import "@lottiefiles/lottie-player";

export default function AboutContent() {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
      {/* Lottie Animation */}
      <div className="w-full md:w-5/12">
        <Slide direction="left">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
            background="transparent"
            speed="1"
            style={{ width: "90%", height: "90%" }}
            loop
            autoplay
          ></lottie-player>
        </Slide>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-7/12">
        <Fade duration={3000}>
          <div className="text-base sm:text-lg leading-relaxed text-white space-y-4 sm:space-y-6">
            <p>
              My name is <b className="text-primary">AD Aadesh Devganiya</b>,
              and I am a{" "}
              <b className="text-primary">Web Designer and Shopify Developer</b>{" "}
              currently working at{" "}
              <b className="text-primary">Chameleon Infotech</b> in Surat.
            </p>

            <p>
              I specialize in building modern, responsive websites using{" "}
              <b className="text-primary">
                HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS
              </b>
              . I also have extensive experience with{" "}
              <b className="text-primary">Shopify</b> development, including
              theme customization and performance optimization.
            </p>

            <p>
              I’m passionate about crafting clean, accessible, and
              high-performing user interfaces using{" "}
              <b className="text-primary">
                modern frontend tools and best practices
              </b>
              .
            </p>

            <p>
              In my free time, I enjoy exploring new design trends, learning
              emerging web technologies, and{" "}
              <b className="text-primary">
                building creative, user-focused digital products
              </b>
              .
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
