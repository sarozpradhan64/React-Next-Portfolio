import React from "react";
import Image from "next/image";
import SrzLayout from "../../components/SrzLayout";
import metas from "../../src/metaData";

import Link from "next/link";
export default function workDetail({ work }) {
  const handleShare = async function () {
    try {
      await navigator.share({
        title: `${metas.user.name} | Project - ${work.title} `,
        url: work.slug,
      });
      // console.log("Data was shared successfully");
    } catch (err) {
      alert("Your device doesnot support this feature");
      // console.error("Share failed:", err.message);
    }
  };
  return (
    <SrzLayout title={work.title}>
      <div className="row">
        <div
          className="col-lg-5 col-md-6"
          // style={{ minHeight: "60vh" }}
        >
          <div className="position-relative" style={{ minHeight: "60vh" }}>
            <Image
              src={work.image}
              alt={`saroj pradhan's work ${work.title}`}
              className="img-fluid  w-100 object-cover"
              fill
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-6 my-3 ps-md-4">
          <div className="mb-3">
            <Link className="pointer" href={"/works"}>
              <i class="fa-solid fa-arrow-left-long me-2"></i>Go Back
            </Link>
          </div>
          <div className="project-info">
            <p className="text-justify">{work.description}</p>

            {/* detail list  */}
            <div className="row mt-4">
              <div className="col-md-2">
                <h5 className="mb-2 text-white">Type</h5>
                <p>{work.type}</p>
              </div>
              <div className="col-md-4">
                <h5 className="mb-2 text-white">Role</h5>
                <p>{work.role}</p>
              </div>

              <div className="col-md-4">
                <h5 className="mb-2 text-white">Tech Stack</h5>
                <p>{work.stack}</p>
              </div>

              <div className="col-md-2">
                <h5 className="mb-2 text-white">Year</h5>
                <p>{work.year}</p>
              </div>
            </div>

            <div className="mt-3 d-flex align-items-center">
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="mx-md-2"
              >
                <i className="me-1 fa-solid fa-arrow-up-right-from-square"></i>
                View Project
              </a>

              {work.source !== "" && (
                <a
                  href={work.source}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-md-2"
                >
                  <i className="me-1 fa-solid fa-code"></i>
                  Source Code
                </a>
              )}

              <a
                href={""}
                onClick={() => handleShare()}
                target="_blank"
                rel="noreferrer"
                className="mx-3"
              >
                <i
                  className="me-1 fa-solid fa-share-nodes pointer"
                  onClick={() => handleShare()}
                ></i>
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </SrzLayout>
  );
}

export async function getStaticPaths() {
  const { works } = await import("../../src/workData.json");

  //get the paths that we want to pre-render based on category
  const paths = works.map((work) => ({
    params: { slug: work.slug },
  }));
  // fallback:false means other routes should be 404
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log(context.params.slug);
  const { works } = await import("../../src/workData.json");
  const work = works.find((w) => context.params.slug === w.slug);
  return {
    props: { work },
  };
}
