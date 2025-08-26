import React, { useState } from "react";
import CommonHeading from "./CommonHeading";
import AboutContent from "./AboutContent";
import Skills from "./Skills";
import Journey from "./Journey";
import SocialMedia from "./SocialMedia";

export default function About() {
  const tabs = [
    { name: "About", key: "about" },
    { name: "Skills", key: "skills" },
    { name: "Journey", key: "journey" },
    { name: "Social Media", key: "socialmedia" },
  ];

  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="pb-10 sm:pb-20" id="about">
      <div className="container mx-auto px-3.5">
        <CommonHeading headingname="About Me" />

        {/* Tab List */}
        <div
          className="flex w-full border-b border-b-light flex-nowrap whitespace-nowrap overflow-x-auto pb-1 scrollbar-color-style"
          role="tablist"
          aria-label="About Section Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              id={`tab-${tab.key}`}
              aria-selected={activeTab === tab.key}
              aria-controls={`tab-panel-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 text-center rounded-tl-sm rounded-tr-sm py-2 px-4 text-base sm:text-lg font-bold cursor-pointer transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-white bg-purple-700"
                  : "text-white bg-transparent hover:bg-purple-600 hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="mt-4">
          {activeTab === "about" && (
            <div
              id="tab-panel-about"
              role="tabpanel"
              aria-labelledby="tab-about"
            >
              <AboutContent />
            </div>
          )}
          {activeTab === "skills" && (
            <div
              id="tab-panel-skills"
              role="tabpanel"
              aria-labelledby="tab-skills"
            >
              <Skills />
            </div>
          )}
          {activeTab === "journey" && (
            <div
              id="tab-panel-journey"
              role="tabpanel"
              aria-labelledby="tab-journey"
            >
              <Journey />
            </div>
          )}
          {activeTab === "socialmedia" && (
            <div
              id="tab-panel-socialmedia"
              role="tabpanel"
              aria-labelledby="tab-socialmedia"
            >
              <SocialMedia />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
