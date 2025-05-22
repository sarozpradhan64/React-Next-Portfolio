"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "@/types/work";
import RevealOnScroll from "@/components/Reveal";
import { strTitle } from "@/utils/helpers/stringHelper";

interface FilterButtonProps {
  filter: string;
  active: string;
  onClick: (filter: string) => void;
}

// Work filter buttons
function FilterButton({ filter, active, onClick }: FilterButtonProps) {
  return (
    <li
      className={`mx-3 md:mb-2 mb-4 cursor-pointer ${
        active === filter ? "active" : "text-white"
      }`}
      onClick={() => onClick(filter)}
    >
      {filter === "all" ? "All Projects" : strTitle(filter)}
    </li>
  );
}

// each work card item
function WorkItem({ work }: { work: Work }) {
  return (
    <RevealOnScroll className="portfolio-item" revealGroupName="work-card">
      <div
        className="portfolio-img rounded relative"
        style={{ height: "250px" }}
      >
        <Image
          className="img-fluid object-cover"
          src={work.image}
          alt={work.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="portfolio-btn absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link href={`/works/${work.slug}`}>
            <h4 className="portfolio-hover-title text-white text-center">
              {work.title}
            </h4>
            <p className="text-center text-white">View Details</p>
          </Link>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default function WorkFilter({ works }: { works: Work[] }) {
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

      {!works ? (
        <h3 className="text-white">Error fetching data</h3>
      ) : filteredWorks.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4">
          {filteredWorks.map((work) => (
            <WorkItem key={work.title} work={work} />
          ))}
        </div>
      ) : (
        <h3 className="text-white">No works yet</h3>
      )}
    </>
  );
}
