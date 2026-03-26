import React from "react";
import Link from "next/link";
import RevealOnScroll from "../Reveal";
import SectionTitle from "../SectionTitle";
import { Work } from "@/types/work";
import WorkCard from "../WorkCard";
import { MoveRight } from "lucide-react";

function HighlightedProject({
  featuredWorks,
}: {
  readonly featuredWorks: ReadonlyArray<Work>;
}) {
  return (
    <div className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex-1">
          <SectionTitle title={"Featured Projects"} />
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            A selection of my heavy-lifting projects where I put my full focus on
            architecture, performance, and user experience.
          </p>
        </div>

        <Link 
          href={"/works"} 
          className="group flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
        >
          Explore All Works
          <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div
        className={
          "grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        }
      >
        {featuredWorks.map((work, index) => (
          <RevealOnScroll
            key={index}
            className="portfolio-item"
            revealGroupName={"work-card"}
          >
            <WorkCard work={work} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

export default HighlightedProject;
