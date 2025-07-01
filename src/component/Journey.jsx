import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

export default function EducationJourney() {
  return (
    <div className="mt-8 md:px-12 lg:px-20">
      <div className="text-center mb-5 sm:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Qualification Journey
        </h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="2019 - 2020"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">
            Secondary School Certificate
          </h4>
          <h5 className="mt-2 font-medium">I P Savani School</h5>
          <p className="mt-2 text-sm">
            Studied 10th grade and achieved a GPA of 8 in SSC Examination.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="2020 - 2023"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">
            Diploma in Engineering
          </h4>
          <h5 className="mt-2 font-medium">Government Polytechnic Valsad</h5>
          <p className="mt-2 text-sm">
            Completed diploma in engineering with a CGPA of 8.23.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="2023 - 2024"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase">Training</h4>
          <h5 className="mt-2 font-medium">
            Creative Design & Multimedia Institute
          </h5>
          <p className="mt-2 text-sm">
            Successfully completed Web Design course with practical projects.
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
