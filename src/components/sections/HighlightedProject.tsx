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
    <div className="mt-32">
      <div className="flex items-end justify-between">
        <SectionTitle title={"Projects"} />

        <Link href={"/works"} className="text-secondary md:inline hidden">
          View More
          <MoveRight className="inline ml-2" size={16} />
        </Link>
      </div>

      <p className="text-justify">
        Amongst many of my works and project that I put my footprint in, here
        are some of the major listings:
      </p>

      <div
        className={
          "mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4"
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

      <Link
        href={"/works"}
        className="mt-8 text-center text-primary md:hidden block"
      >
        View More
      </Link>
    </div>
  );
}

export default HighlightedProject;
