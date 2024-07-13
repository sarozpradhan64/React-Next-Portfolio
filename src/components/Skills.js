import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const Skills = ({ skills }) => {
  return (
    <div className="mt-16">
      <SectionTitle title="My Skills !" />

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="group p-4 flex justify-center items-center flex-col rounded-md bg-[#1C1F26] hover:shadow-md hover:bg-secondary"
          >
            <Image
              src={skill.path}
              height={50}
              width={50}
              alt={skill.title}
              className="rounded-none cursor-pointer"
            />
            <p className="mt-4 text-sm select-none cursor-pointer tracking-wide group-hover:text-white">
              <a href={skill.link} target="_blank" rel="noreferrer">
                {skill.title}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
