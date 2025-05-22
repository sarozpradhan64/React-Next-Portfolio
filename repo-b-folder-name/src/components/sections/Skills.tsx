"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { Skill } from "@/types/skill";

const Skills = ({ skills }: { skills: Skill[] }) => {
  const [loadMore, setLoadMore] = useState(false);
  const displayedSkills = useMemo(
    () => (loadMore ? skills : skills.slice(0, 12)),
    [loadMore, skills]
  );

  return (
    <div className="mt-32">
      <SectionTitle title="My Skills !" />
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        {displayedSkills.map((skill) => (
          <div
            key={skill.title}
            className="group  bg-[#1C1F26]  p-4 flex justify-center items-center flex-col rounded-md border border-transparent hover:border-gray-600 hover:shadow-md"
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

      <div className="mt-12 flex justify-center">
        {!loadMore && (
          <Button color="primary" onClick={() => setLoadMore(!loadMore)}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Skills;
