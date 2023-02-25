import React, { useState } from "react";
import SrzLayout from "../components/SrzLayout";
import Image from "next/image";
import Link from "next/link";

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
      <div className="text-lg-end mb-5">
        <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
          <li
            className={`mx-3 mb-2 ${active === "All" ? "active" : "text-white"}`}
            onClick={() => handleFilter("All")}
          >
            All Projects
          </li>
          <li
            className={`mx-3 mb-2 ${active === "UI/UX" ? "active" : "text-white"}`}
            onClick={() => handleFilter("UI/UX")}
          >
            UI/UX Design
          </li>
          <li
            className={`mx-3 mb-2 ${active === "Web App" ? "active" : "text-white"}`}
            onClick={() => handleFilter("Web App")}
          >
            Web App
          </li>
          <li
            className={`mx-3 mb-2 ${active === "Mobile App" ? "active" : "text-white"}`}
            onClick={() => handleFilter("Mobile App")}
          >
            Mobile App
          </li>
        </ul>
      </div>

      <div className="row g-4" data-wow-delay="0.1s">
        {myWorks.length >= 1 ? (
          myWorks.map((work, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-img  rounded overflow-hidden">
                <Image
                  className="img-fluid object-cover"
                  src={work.image}
                  alt="gyannhub"
                  fill
                />
                <div className="portfolio-btn position-relative">
                  <Link href={`/work/${work.slug}`}>
                    {" "}
                    <h3 className="portfolio-hover-title">{work.title}</h3>
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href={`/work/${work.slug}`}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  <a
                    rel="noreferrer"
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    target={"_blank"}
                    href={work.href}
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div>
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
