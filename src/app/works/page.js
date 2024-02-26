"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SrzLayout from "@/components/SrzLayout";
import RevealOnScroll from "@/components/Reveal";
import useWork from "@/components/swr/useWork";

export default function Page() {
  const { works, isLoading, isError } = useWork();
  const [active, setActive] = useState("all");

  const filteredWorks = active === "all" ? works : works.filter(work => work.type === active);

  const handleFilter = (filterValue) => {
    setActive(filterValue);
  };

  return (
    <SrzLayout title="Works">
      <div className="mb-8">
        <ul className="list-inline mb-0" id="portfolio-filters">
          {['all', 'website', 'software', 'mobile', 'mini'].map((filter, index) => (
            <li
              key={index}
              className={`mx-3 md:mb-2 mb-4 ${active === filter ? "active" : "text-white"}`}
              onClick={() => handleFilter(filter)}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4">
        {isLoading ? (
          <h3 className="text-white">Loading...</h3>
        ) : isError ? (
          <h3 className="text-white">Error fetching data</h3>
        ) : filteredWorks.length > 0 ? (
          filteredWorks.map((work, index) => (
            <RevealOnScroll
              key={index}
              className="portfolio-item"
              revealGroupName={"work-card"}
            >
              <div className="portfolio-img  rounded overflow-hidden">
                <Image
                  className="img-fluid object-cover"
                  src={work.image}
                  alt={work.title}
                  fill
                />
                <div className="portfolio-btn relative">
                  <Link href={`/works/${work.slug}`}>
                    {" "}
                    <h4 className="portfolio-hover-title">{work.title}</h4>
                    <p className="text-center text-white">View Details</p>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))
        ) : (
          <h3 className="text-white">No works yet</h3>
        )}
      </div>
    </SrzLayout>
  );
}
