"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "@/types/work";
import RevealOnScroll from "@/components/Reveal";
import { strTitle } from "@/utils/helpers/stringHelper";
import Badge from "@/components/Badge";

interface FilterButtonProps {
  filter: string;
  active: string;
  onClick: (filter: string) => void;
}

// Work filter buttons
function FilterButton({
  filter,
  active,
  onClick,
}: Readonly<FilterButtonProps>) {
  return (
    <button
      type="button"
      className={`mx-3 md:mb-2 mb-4 cursor-pointer ${
        active === filter ? "active" : "text-white"
      }`}
      onClick={() => onClick(filter)}
    >
      {filter === "all" ? "All Projects" : strTitle(filter)}
    </button>
  );
}

// each work card item
function WorkItem({ work }: { readonly work: Work }) {
  const colors: string[] = [
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  return (
    <RevealOnScroll className="portfolio-item" revealGroupName="work-card">
      <div
        className="portfolio-img rounded-xl relative"
        style={{ height: "250px" }}
      >
        <Image
          className="img-fluid object-cover"
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="portfolio-btn z-[100] rounded-xl absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link href={`/works/${work.slug}`}>
            <h4 className="portfolio-hover-title text-white text-center hover:underline">
              {work.title}
            </h4>
          </Link>
        </div>
        <div className="absolute z-50 bottom-2 left-2">
          <h4 className="text-white mb-2">{work.title}</h4>
          <div className="space-x-2">
            {work.stacks.map((stack, index) => (
              <Badge key={index} color={colors[index]}>
                {stack}
              </Badge>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      </div>
    </RevealOnScroll>
  );
}

export default function WorkFilter({ works }: { readonly works: Work[] }) {
  const [active, setActive] = useState("all");

  const handleFilter = useCallback((filterValue: string) => {
    setActive(filterValue);
  }, []);

  const filteredWorks =
    active === "all" ? works : works.filter((work) => work.type === active);

  return (
    <>
      <div className="mb-12">
        <ul
          className="md:flex md:justify-center list-inline mb-0"
          id="portfolio-filters"
        >
          {["all", "software", "website", "mobile", "open source"].map(
            (filter) => (
              <FilterButton
                key={filter}
                filter={filter}
                active={active}
                onClick={handleFilter}
              />
            )
          )}
        </ul>
      </div>

      {(() => {
        if (!works) {
          return <h3 className="text-white">Error fetching data</h3>;
        } else if (filteredWorks.length > 0) {
          return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4">
              {filteredWorks.map((work) => (
                <WorkItem key={work.title} work={work} />
              ))}
            </div>
          );
        } else {
          return <h3 className="text-white">No works yet</h3>;
        }
      })()}
    </>
  );
}
