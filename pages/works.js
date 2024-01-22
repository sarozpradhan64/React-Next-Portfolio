import React, { useState } from "react";
import SrzLayout from "../components/SrzLayout";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../components/Reveal";

export default function Works({ works }) {
  const [myWorks, setMyWorks] = useState(works);
  const [active, setActive] = useState("all");

  const handleFilter = function (filterValue) {
    if (filterValue == "all") {
      setMyWorks(works);
    } else {
      setMyWorks(works.filter((work) => work.type == filterValue));
    }
    setActive(filterValue);
  };

  // console.log(active)
  return (
    <SrzLayout title="Works">
      <div className="mb-8">
        <ul className="list-inline mb-0" id="portfolio-filters">
          <li
            className={`mx-3 md:mb-2 mb-4 ${active === "all" ? "active" : "text-white"
              }`}
            onClick={() => handleFilter("all")}
          >
            All Projects
          </li>
          <li
            className={`mx-3 md:mb-2 mb-4 ${active === "website" ? "active" : "text-white"
              }`}
            onClick={() => handleFilter("website")}
          >
            Website
          </li>
          <li
            className={`mx-3 md:mb-2 mb-4 ${active === "software" ? "active" : "text-white"
              }`}
            onClick={() => handleFilter("software")}
          >
            Software
          </li>
          <li
            className={`mx-3 md:mb-2 mb-4 ${active === "mobile" ? "active" : "text-white"
              }`}
            onClick={() => handleFilter("mobile")}
          >
            Mobile App
          </li>

          <li
            className={`mx-3 md:mb-2 mb-4 ${active === "mini" ? "active" : "text-white"
              }`}
            onClick={() => handleFilter("mini")}
          >
            Mini App
          </li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-5 md:gap-5 gap-4">
        {myWorks.length >= 1 ? (
          myWorks.map((work, index) => (
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

export async function getStaticProps() {
  const { works } = await import("../src/workData.json");
  return {
    props: { works },
  };
}
