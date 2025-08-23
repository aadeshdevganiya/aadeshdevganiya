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

        <div
          className="overflow-x-auto pb-1 scrollbar-color-style"
          role="tablist"
          aria-label="About Section Tabs"
        >
          <ul className="flex w-full border-b flex-nowrap whitespace-nowrap">
            {tabs.map((tab) => (
              <li key={tab.key} className="flex-1 text-center">
                <button
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  aria-controls={`tab-panel-${tab.key}`}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full py-2 px-4 text-base sm:text-lg font-bold cursor-pointer transition-colors duration-200 ${
                    activeTab === tab.key
                      ? "text-white bg-primary rounded-tl-sm rounded-tr-sm" // improved contrast for active tab
                      : "text-primary bg-transparent hover:bg-primary hover:text-white"
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
            <div id="tab-panel-about" role="tabpanel">
              <AboutContent />
            </div>
          )}
          {activeTab === "skills" && (
            <div id="tab-panel-skills" role="tabpanel">
              <Skills />
            </div>
          )}
          {activeTab === "journey" && (
            <div id="tab-panel-journey" role="tabpanel">
              <Journey />
            </div>
          )}
          {activeTab === "socialmedia" && (
            <div id="tab-panel-socialmedia" role="tabpanel">
              <SocialMedia />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
