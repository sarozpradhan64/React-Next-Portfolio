"use client";

import { useState, useCallback } from "react";
import { Work } from "@/types/work";
import RevealOnScroll from "@/components/Reveal";
import { strTitle } from "@/utils/helpers/stringHelper";
import WorkCard from "@/components/cards/WorkCard";
import { TECH_CATEGORIES } from "@/data/workData";

interface FilterButtonProps {
  filter: string;
  active: string;
  onClick: (filter: string) => void;
}

function CategoryFilterButton({
  filter,
  active,
  onClick,
}: Readonly<FilterButtonProps>) {
  const isActive = active === filter;
  return (
    <li>
      <button
        type="button"
        className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
          isActive
            ? "bg-primary text-white shadow-premium ring-2 ring-primary/20"
            : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
        }`}
        onClick={() => onClick(filter)}
      >
        {filter === "all" ? "All Projects" : strTitle(filter).toUpperCase()}
      </button>
    </li>
  );
}

function TechFilterButton({
  filter,
  active,
  onClick,
}: Readonly<FilterButtonProps>) {
  const isActive = active === filter;
  return (
    <li>
      <button
        type="button"
        className={`w-full text-left px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
          isActive
            ? "bg-secondary/10 text-secondary ring-1 ring-secondary/20 shadow-sm"
            : "text-slate-400 hover:text-white hover:bg-white/5"
        }`}
        onClick={() => onClick(filter)}
      >
        {filter === "all" ? "All Technologies" : filter}
      </button>
    </li>
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
  const [activeType, setActiveType] = useState("all");
  const [activeTech, setActiveTech] = useState("all");

  const allTechs = Array.from(
    new Set(works.flatMap((work) => work.stacks))
  ).sort();

  const handleTypeFilter = useCallback((filterValue: string) => {
    setActiveType(filterValue);
  }, []);

  const handleTechFilter = useCallback((filterValue: string) => {
    setActiveTech(filterValue);
  }, []);

  const filteredWorks = works.filter((work) => {
    const matchType = activeType === "all" || work.type === activeType;
    const matchTech = activeTech === "all" || work.stacks.includes(activeTech);
    return matchType && matchTech;
  });

  const getTechCategory = (tech: string) => {
    for (const [category, techs] of Object.entries(TECH_CATEGORIES)) {
      if (techs.includes(tech)) return category;
    }
    return "Other";
  };

  const groupedTechs = allTechs.reduce((acc, tech) => {
    const category = getTechCategory(tech);
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, string[]>);


  const categoryOrder = ["Frontend", "Backend", "Tools & Others", "Other"];
  const sortedCategories = Object.keys(groupedTechs).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  const activeTechCount = filteredWorks.length;

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <aside className="hidden lg:block lg:w-1/4">
        <div className="lg:sticky lg:top-24 space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] m-0">
                Filter by Technology
              </p>
              <span className="bg-primary/20 text-secondary px-2 py-0.5 rounded-full text-[10px] font-bold">
                {activeTechCount}
              </span>
            </div>
            
            <ul className="space-y-6 list-none" id="portfolio-tech-filters">
              <li>
                <TechFilterButton
                  filter="all"
                  active={activeTech}
                  onClick={handleTechFilter}
                />
              </li>
              
              {sortedCategories.map((category) => (
                <li key={category}>
                  <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-2 ml-4">
                    {category}
                  </p>
                  <ul className="space-y-1 list-none">
                    {groupedTechs[category].map((tech) => (
                      <TechFilterButton
                        key={tech}
                        filter={tech}
                        active={activeTech}
                        onClick={handleTechFilter}
                      />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <main className="lg:w-3/4 flex-grow">
        <div className="mb-12">
          <ul
            className="flex flex-wrap items-center gap-3 list-none justify-start md:justify-start"
            id="portfolio-type-filters"
          >
            {["all", "software", "website", "mobile", "open source"].map(
              (filter) => (
                <CategoryFilterButton
                  key={filter}
                  filter={filter}
                  active={activeType}
                  onClick={handleTypeFilter}
                />
              ),
            )}
          </ul>
        </div>

        {(() => {
          if (!works) {
            return <h3 className="text-white">Error fetching data</h3>;
          } else if (filteredWorks.length > 0) {
            return (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredWorks.map((work) => (
                  <WorkItem key={work.title} work={work} />
                ))}
              </div>
            );
          } else {
            return (
              <div className="py-20 text-center bg-dark-lighter/50 rounded-3xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-slate-400 max-w-md mx-auto">
                  No projects match both the selected category and technology.
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => {
                    setActiveType("all");
                    setActiveTech("all");
                  }}
                  className="mt-6 text-secondary hover:text-white font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            );
          }
        })()}
      </main>
    </div>
  );
}
