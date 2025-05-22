import React from "react";
import RevealOnScroll from "../Reveal";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import { Work } from "@/types/work";

function HighlightedProject({ featuredWorks }: { featuredWorks: Work[] }) {
  return (
    <div className="mt-32">
      <div className="flex items-end justify-between">
        <SectionTitle title={"Highlighted Projects !"} />

        <Link href={"/works"} className="text-primary md:inline hidden">
          View More
        </Link>
      </div>

      <p className="text-justify">
        Amongst many of my works and project that I put my footprint in, here
        are some of the major listings:
      </p>

      <div className="mt-8">
        {featuredWorks && featuredWorks.length >= 1 ? (
          <div
            className={
              "grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4"
            }
          >
            {featuredWorks.map((work, index) => (
              <RevealOnScroll
                key={index}
                className="portfolio-item"
                revealGroupName={"work-card"}
              >
                <div className="portfolio-img rounded">
                  <Image
                    className="img-fluid object-cover"
                    src={work.image}
                    alt={work.title}
                    fill
                  />
                  <div className="portfolio-btn relative">
                    <Link href={`/works/${work.slug}`}>
                      <h4 className="portfolio-hover-title">{work.title}</h4>
                      <p className="text-center text-white">View Details</p>
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <h3 className="text-white">No works yet</h3>
        )}
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
