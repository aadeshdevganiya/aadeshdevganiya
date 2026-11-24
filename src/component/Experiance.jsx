import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import CommonHeading from "./CommonHeading";

export default function Experiance() {
  return (
    <div className=" py-10 md:px-12 lg:px-20">
      <div className="text-center mb-5 sm:mb-8">
        <CommonHeading headingname="Experiance" />
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="2023 - 2024"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase tracking-[1px]">
            Web Designer
          </h4>
          <h5 className="mt-2 font-medium">
            Creative Design & Multimedia Institute
          </h5>
          <p className="mt-2 text-sm">
            Training in web design, HTML, CSS, and front-end development.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="April 2024 - December 2024"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase tracking-[1px]">
            Web Designer / Front-end Developer
          </h4>
          <h5 className="mt-2 font-medium">Codelink Infotech</h5>
          <p className="mt-2 text-sm">
            Worked on various web design projects, focusing on improving skills
            in HTML, CSS, JavaScript, and modern frameworks like React.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="January 2025 - August 2025"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase tracking-[1px]">
            Web Designer / Shopify Developer
          </h4>
          <h5 className="mt-2 font-medium">Chameleon Infotech</h5>
          <p className="mt-2 text-sm">
            Contributed to Shopify store development, customized themes, and
            improved user experience through efficient front-end design.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#B13BFF", color: "#ffffff" }}
          contentArrowStyle={{ borderRight: "7px solid #B13BFF" }}
          date="September 2025 - Present"
          iconStyle={{ background: "#B13BFF", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h4 className="font-semibold text-lg uppercase tracking-[1px]">
            Shopify Developer / Web Designer
          </h4>
          <h5 className="mt-2 font-medium">Dynamic Dreamz</h5>
          <p className="mt-2 text-sm">
            Designing and customizing Shopify themes, optimizing websites for
            speed and performance, and enhancing user experience for e-commerce
            platforms.
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
