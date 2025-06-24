import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export default function EducationJourney() {
  return (
    <div className="mt-8 md:px-12 lg:px-20">
      {/* Title */}
      <div className="text-center mb-5 sm:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Qualification Journey
        </h2>
      </div>

      {/* Timeline */}
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #B13BFF" }}
          date="2019 - 2020"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">
            Secondary School Certificate
          </h4>
          <h5 className="mt-2 font-medium">I p savani , School</h5>
          <p className="mt-2 text-sm">
            Studied here 10th as a part of the secondary school certificate and
            achieved a GPA of 8 in the SSC examination.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #B13BFF" }}
          date="2020 - 2023"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">
            Diploma in Engineering
          </h4>
          <h5 className="mt-2 font-medium">Government Polytechnic Valsad</h5>
          <p className="mt-2 text-sm">
            Completed a diploma in engineering and earned a CGPA of 8.23.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid  #B13BFF" }}
          date="2023 - 2024"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">Tranning</h4>
          <h5 className="mt-2 font-medium">
            Creative Design & Multimedia Institute
          </h5>
          <p className="mt-2 text-sm">
            I completed my Web Design course at this institute.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#ffffff", color: "#B13BFF" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}
