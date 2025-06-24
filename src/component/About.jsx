import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import AboutContent from "./AboutContent";
import Skills from "./Skills";
import Journey from "./Journey";
import Ranking from "./Ranking";
import SocialMedia from "./SocialMedia";

export default function About() {
  const tabs = [
    { name: "About", key: "about" },
    { name: "Skills", key: "skills" },
    { name: "Journey", key: "journey" },
    { name: "Ranking", key: "ranking" },
    { name: "Social Media", key: "socialmedia" },
  ];

  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="pb-20" id="About">
      <div className="container mx-auto px-3.5">
        <CommonHeading headingname="About Me" />

        <div className="overflow-x-auto pb-1 scrollbar-color-style">
          <ul className="flex w-fit sm:w-full border-b mt-3 flex-nowrap whitespace-nowrap ">
            {tabs.map((tab) => (
              <li key={tab.key} className="flex-1 text-center">
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full py-2 px-4 text-base sm:text-lg font-bold cursor-pointer ${
                    activeTab === tab.key
                      ? "text-primary bg-white rounded-tl-sm rounded-tr-sm"
                      : "hover:text-primary"
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          {activeTab === "about" && (
            <div>
              <AboutContent />
            </div>
          )}
          {activeTab === "skills" && (
            <div>
              <Skills />
            </div>
          )}
          {activeTab === "journey" && (
            <div>
              <Journey />
            </div>
          )}
          {activeTab === "ranking" && (
            <div>
              <Ranking />
            </div>
          )}
          {activeTab === "socialmedia" && (
            <div>
              <SocialMedia />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
