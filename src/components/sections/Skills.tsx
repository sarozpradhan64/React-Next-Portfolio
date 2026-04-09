"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { Skill } from "@/types/skill";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Skills = ({ skills }: { skills: Skill[] }) => {
  const [loadMore, setLoadMore] = useState(false);
  const displayedSkills = useMemo(
    () => (loadMore ? skills : skills.slice(0, 12)),
    [loadMore, skills]
  );

  return (
    <div className="py-24">
      <div className="text-center mb-16">
        <SectionTitle title="Tech Stack" position="center" />
        <p className="text-slate-400 text-lg">Tools and technologies I use to bring ideas to life</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {displayedSkills.map((skill) => (
          <div
            key={skill.title}
            className="group bg-dark-lighter p-8 flex flex-col justify-center items-center rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover active:scale-95"
          >
            <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
              <Image
                src={skill.path}
                fill
                alt={skill.title}
                className="object-contain"
              />
            </div>
            <p className="mt-6 text-sm font-bold tracking-widest uppercase text-slate-500 group-hover:text-white transition-colors">
              <a href={skill.link} target="_blank" rel="noreferrer">
                {skill.title}
              </a>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        {!loadMore && (
          <Button color="transparent" outline="light" onClick={() => setLoadMore(!loadMore)} className="group">
            <ChevronDownIcon className="h-5 w-5 me-2 group-hover:translate-y-1 transition-transform" />
            LOAD MORE
          </Button>
        )}
      </div>
    </div>
  );
};

export default Skills;
