import React, { useState } from "react";
import SrzLayout from "../components/SrzLayout";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../components/Reveal";

export default function Works({ works }) {
  const [myWorks, setMyWorks] = useState(works);
  const [active, setActive] = useState("All");

  const handleFilter = function (filterValue) {
    if (filterValue == "All") {
      setMyWorks(works);
    } else {
      setMyWorks(works.filter((work) => work.type == filterValue));
    }
    setActive(filterValue);
  };

  // console.log(active)
  return (
    <SrzLayout title="Works">
      <div className="mb-5">
        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
          <li
            className={`mx-3 mb-md-2 mb-4 ${
              active === "All" ? "active" : "text-white"
            }`}
            onClick={() => handleFilter("All")}
          >
            All Projects
          </li>
          <li
            className={`mx-3 mb-md-2 mb-4 ${
              active === "website" ? "active" : "text-white"
            }`}
            onClick={() => handleFilter("website")}
          >
            Website
          </li>
          <li
            className={`mx-3 mb-md-2 mb-4 ${
              active === "Web App" ? "active" : "text-white"
            }`}
            onClick={() => handleFilter("Web App")}
          >
            Web App
          </li>
          <li
            className={`mx-3 mb-md-2 mb-4 ${
              active === "Mobile App" ? "active" : "text-white"
            }`}
            onClick={() => handleFilter("Mobile App")}
          >
            Mobile App
          </li>
        </ul>
      </div>

      <div className="row gx-md-5 gy-md-5 gy-4" data-wow-delay="0.1s">
        {myWorks.length >= 1 ? (
          myWorks.map((work, index) => (
            <RevealOnScroll
              key={index}
              className="col-lg-4 col-md-6 portfolio-item"
              revealGroupName={"work-card"}
            >
              <div className="portfolio-img  rounded overflow-hidden">
                <Image
                  className="img-fluid object-cover"
                  src={work.image}
                  alt={work.title}
                  fill
                />
                <div className="portfolio-btn position-relative">
                  <Link href={`/work/${work.slug}`}>
                    {" "}
                    <h3 className="portfolio-hover-title">{work.title}</h3>
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
