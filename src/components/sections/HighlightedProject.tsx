import React from "react";
import RevealOnScroll from "../Reveal";
import SectionTitle from "../SectionTitle";
import { Work } from "@/types/work";
import WorkCard from "../cards/WorkCard";
import ViewAllLink from "../elements/ViewAllLink";


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
            A curated selection of the Projects i have worked on.
          </p>
        </div>

        <ViewAllLink href="/works">Explore All Works</ViewAllLink>
      </div>

      <div className={"grid lg:grid-cols-3 md:grid-cols-2 gap-8"}>
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
