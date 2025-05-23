"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Work } from "@/types/work";
import RevealOnScroll from "@/components/Reveal";
import { strTitle } from "@/utils/helpers/stringHelper";
import Badge from "@/components/Badge";
import WorkCard from "@/components/WorkCard";

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
  return (
    <RevealOnScroll className="portfolio-item" revealGroupName="work-card">
      <WorkCard work={work} />
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
