import React from "react";

const skills = [
  {
    name: "HTML5",
    img: "https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png",
  },
  {
    name: "CSS3",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    img: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png",
  },
  {
    name: "Bootstrap",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Shopify",
    img: "https://cdn.worldvectorlogo.com/logos/shopify-2.svg",
  },
];

export default function Skills() {
  return (
    <section className="py-5 sm:py-10">
      <div className="grid gap-3 sm:gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-primary text-white rounded-lg shadow-md p-5 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white w-24 h-24 flex items-center justify-center rounded-full relative overflow-hidden mb-4">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 z-10 object-contain"
              />
              <div className="absolute top-0 left-0 w-1/2 h-full bg-gray-400 opacity-30 rounded-l-full" />
            </div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
