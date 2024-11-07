/**
 * @copyright 2024 Marckus Rey C. Santiago
 * @license Apache-2.0
 */

import React from "react";
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/images/nextjs.svg",
    label: "Next.js",
    desc: "Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/git2.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Scripting/Data Analytics",
  },
  {
    imgSrc: "/images/excel.svg",
    label: "MS Excel",
    desc: "Data Analytics and Visualization",
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]:">
          See the tools and technologies I use to create intuitive websites and
          applications as well as other relevant tools I use for other purposes
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => 
          <SkillCard
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
          />
        )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
