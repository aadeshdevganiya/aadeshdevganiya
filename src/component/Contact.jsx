import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CommonHeading from "./CommonHeading";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result.message);

      alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Backend Server was not running while submitting the form.");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full pb-20 md:px-12">
      <div className="container mx-auto px-3.5">
        <CommonHeading headingname="Contact us" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly w-full space-y-2"
          >
            <div>
              <label
                htmlFor="name"
                className="bg-secondary text-white font-semibold text-sm px-2 py-0.5 transform translate-x-3 sm:translate-x-6 translate-y-2 inline-flex w-fit"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-primary rounded-md px-4 py-2.5 sm:py-3 focus:outline-none placeholder-light placeholder:text-sm  focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="bg-secondary text-white font-semibold text-sm px-2 py-0.5 transform translate-x-3 sm:translate-x-6 translate-y-2 inline-flex w-fit"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-primary rounded-md px-4 py-2.5 sm:py-3 focus:outline-none  placeholder-light placeholder:text-sm focus:ring-primary bg-secondary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="bg-secondary text-white font-semibold text-sm px-2 py-0.5 transform translate-x-3 sm:translate-x-6 translate-y-2 inline-flex w-fit"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="h-36 w-full resize-none rounded-md border border-primary px-4 py-2.5 sm:py-3 outline-none placeholder-light placeholder:text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-primary px-6 py-3 w-fit uppercase text-white text-sm rounded-full font-medium inline-flex justify-center items-center gap-2.5 cursor-pointer"
            >
              Submit{" "}
              <AiOutlineSend className="text-xl -rotate-[30deg] -translate-y-1 translate-x-1" />
            </button>
          </form>

          {/* Contact Details */}
          <div className="flex flex-col justify-evenly space-y-4 sm:space-y-6 md:pl-28 mt-5">
            <div className="flex items-start gap-4">
              <div className="bg-light text-primary rounded-full w-11 h-11 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-light">
                <FiAtSign />
              </div>
              <a
                href="mailto:aadeshdevganiya10@gmail.com"
                className="text-yellow hover:underline mt-2"
              >
                aadeshdevganiya10@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-light text-primary rounded-full w-11 h-11 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-light">
                <FiPhone />
              </div>
              <a
                href="tel:+916355569615"
                className="text-yellow hover:underline mt-2"
              >
                +91 6355569615
              </a>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-light text-primary rounded-full w-11 h-11 flex items-center justify-center text-xl transition-transform duration-300 hover:scale-110 hover:bg-primary hover:text-light">
                <HiOutlineLocationMarker />
              </div>
              <a
                href="https://maps.app.goo.gl/6V6WkiuaTNARAjcd6 "
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow hover:underline mt-2"
              >
                Surat , Gujarat
              </a>
            </div>

            {/* Google Map */}
            <div className="w-full h-52 mt-4">
              <iframe
                title="Contact Map"
                className="w-full h-full rounded-md border border-primary"
                allowFullScreen
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709466476!2d72.73988496746377!3d21.15934029861164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1750846493615!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
