import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Work } from "@/types/work";
import Badge from "../Badge";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div className="group portfolio-item rounded-3xl overflow-hidden relative aspect-[4/3] bg-dark-lighter border border-white/5 shadow-premium transition-all">
      <Image
        className="img-fluid object-cover"
        src={work.image}
        alt={work.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80"></div>

      <div className="absolute z-20 bottom-0 left-0 right-0 p-6">
        {work.company && (
          <span className="text-[10px] text-secondary font-bold tracking-widest uppercase mb-1 block opacity-80">
            {work.company}
          </span>
        )}
        <h4 className="text-xl font-bold text-white mb-2 leading-tight">
          <Link href={`/works/${work.slug}`}>{work.title}</Link>
        </h4>
        <div className="flex justify-between items-start gap-6 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {work.stacks.map((stack, index) => (
              <span
                key={index}
                className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-md uppercase tracking-wider font-medium"
              >
                {stack}
              </span>
            ))}
          </div>

          <div>
            <Link
              href={`/works/${work.slug}`}
              className="bg-white/50 text-white px-3 py-1 rounded-full font-medium text-xs"
            >
              VIEW PROJECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
