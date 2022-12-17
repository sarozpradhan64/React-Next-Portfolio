import React from "react";
import SrzLayout from "../components/SrzLayout";
import Image from "next/image";
import data from "../src/data";
import Link from "next/link";
export default function works({ works }) {
  console.log(works);
  return (
    <SrzLayout>
      <div className="container-xxl" id="project">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-center"
          >
            <div className="col-lg-6">
              <h1 className="display-5 mb-0 text-white">My Works</h1>
            </div>
            {/* <div className="col-lg-6 text-lg-end">
                  <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                    <li className="mx-3 active" data-filter="*">
                      All Projects
                    </li>
                    <li className="mx-3 text-white" data-filter=".first">
                      UI/UX Design
                    </li>
                    <li className="mx-3 text-white" data-filter=".second">
                      Graphic Design
                    </li>
                  </ul>
                </div> */}
          </div>
          <div className="row g-4" data-wow-delay="0.1s">
            {works.map((work, index) => (
              <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-img  rounded overflow-hidden">
                  <Image
                    className="img-fluid"
                    src={work.image}
                    alt="gyannhub"
                    layout="fill"
                  />
                  <div className="portfolio-btn">
                    <Link
                      rel="noreferrer"
                      className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                      href={`/work/${work.slug}`}
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                    <a
                      rel="noreferrer"
                      className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                      href="https://gyannhub.com"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <Image
                  className="img-fluid"
                  src="/img/project-5.jpg"
                  alt="blazecodes"
                  layout="fill"
                />
                <div className="portfolio-btn">
                  <a
                    rel="noreferrer"
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="/img/project-5.jpg"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    rel="noreferrer"
                    target={"_blank"}
                    className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                    href="https://blazecodes.com"
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
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
