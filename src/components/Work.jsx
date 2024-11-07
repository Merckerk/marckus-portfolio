/**
 * @copyright 2024 Marckus Rey C. Santiago
 * @license Apache-2.0
 */

import React from "react";

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "RTAMS: Real Time Attendance System",
    tags: ["API", "Full Stack", "Development"],
    projectLink: "https://github.com/Merckerk/rtams-next",
  },
  {
    imgSrc: "/images/trackit.png",
    title: "Trackit",
    tags: ["API", "Full Stack", "Development"],
    projectLink: "https://github.com/Merckerk/trackitjs",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "pcworth.com",
    tags: ["Internship", "Front End", "Development"],
    projectLink: "https://www.pcworth.com/",
  },
  {
    imgSrc: "/images/For Real.png",
    title: "For Real",
    tags: ["Game Development", "Development"],
    projectLink: "https://github.com/Merckerk/ForReal",
  },
  {
    imgSrc: "/images/lakbayin.png",
    title: "Lakbayin",
    tags: ["Front End", "Development"],
    projectLink: "https://github.com/Merckerk/cetfinals.github.io",
  },
  {
    imgSrc: "/images/billcom.png",
    title: "BillCom: Financial planner",
    tags: ["Back End", "Development"],
    projectLink: "https://github.com/d4nnjoseph/BillCom",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
