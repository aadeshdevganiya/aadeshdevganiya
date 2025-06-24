import React from "react";
import CommonHeading from "./CommonHeading";

export default function About() {
  return (
    <div className="pb-20">
      <div className="container mx-auto px-3.5">
        <CommonHeading headingname="About me" />
        <div className="w-full mt-3 flex flex-col">
          <div>
            <ul className="flex border-b justify-between">
              <li className="flex-1 text-center">
                <Link
                  to="/"
                  className="inline-block py-2 px-4 text-lg font-bold text-blue-600 border-b-2 border-blue-600"
                >
                  About
                </Link>
              </li>
              <li className="flex-1 text-center">
                <Link
                  to="/technicalskill"
                  className="inline-block py-2 px-4 text-lg font-bold hover:text-blue-600"
                >
                  Skills
                </Link>
              </li>
              <li className="flex-1 text-center">
                <Link
                  to="/educationjourney"
                  className="inline-block py-2 px-4 text-lg font-bold hover:text-blue-600"
                >
                  Journey
                </Link>
              </li>
              <li className="flex-1 text-center">
                <Link
                  to="/ranking"
                  className="inline-block py-2 px-4 text-lg font-bold hover:text-blue-600"
                >
                  Ranking
                </Link>
              </li>
              <li className="flex-1 text-center">
                <Link
                  to="/socialmedia"
                  className="inline-block py-2 px-4 text-lg font-bold hover:text-blue-600"
                >
                  Social Media
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
