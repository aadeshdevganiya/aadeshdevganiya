import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-sm md:text-base">
              Designed and Developed by AD Aadesh Devganiya
            </h3>
          </div>
          <div>
            <h3 className="text-sm md:text-base">
              © {year} AD Aadesh Devganiya
            </h3>
          </div>
          <div>
            <ul className="flex space-x-4 justify-center">
              <li>
                <a
                  href="https://github.com/aadeshdevganiya"
                  className="text-white hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aadesh-devganiya/"
                  className="text-white hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_aadesh__devganiyaa__24_?igsh=MXZ5NnJuYTVxN2k2YQ=="
                  className="text-white hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/aadesh.devganiya?mibextid=ZbWKwL#"
                  className="text-white hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:aadeshdevganiya10@gmail.com"
                  className="text-white hover:text-primary transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGoogle size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
