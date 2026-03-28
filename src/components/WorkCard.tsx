import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Work } from "@/types/work";
import Badge from "./Badge";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div
      className="group portfolio-item rounded-3xl overflow-hidden relative aspect-[4/3] bg-dark-lighter border border-white/5 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover"
    >
      <Image
        className="img-fluid object-cover transition-transform duration-700 group-hover:scale-110"
        src={work.image}
        alt={work.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

      {/* Hover Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-primary/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
        <Link 
          href={`/works/${work.slug}`}
          className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
        >
          VIEW PROJECT
        </Link>
      </div>

      {/* Bottom Info */}
      <div className="absolute z-20 bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        {work.company && (
          <span className="text-[10px] text-secondary font-bold tracking-widest uppercase mb-1 block opacity-80">
            {work.company}
          </span>
        )}
        <h4 className="text-xl font-bold text-white mb-2 leading-tight">
          {work.title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {work.stacks.map((stack, index) => (
            <span key={index} className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-md uppercase tracking-wider font-medium">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
