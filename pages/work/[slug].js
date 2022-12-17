import React from "react";
import Image from "next/image"
import SrzLayout from "../../components/SrzLayout";

export default function workDetail({ work }) {
  console.log(work);
  return (
    <SrzLayout>
      <div className="container-xxl" id="project">
        <div className="container">
          <div className="row g-5 mb-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0 text-white">{work.title}</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 position-relative">
              <Image
                src={work.image}
                alt={`saroj pradhan's work ${work.title}`}
                class="img-fluid  w-100 object-cover"
                fill
              />
            </div>

            <div class="col-lg-6 my-3">
              <div class="project-info">
                <h3 class="mb-4 text-white">{work.title}</h3>
                <p className="text-justify">{work.description}</p>

                <p className="text-justify">{work.task}</p>

                <div class="row mt-4">
                  <div class="col-lg-6">
                    <div class="info">
                      <h5 class="mb-0 text-white">Role</h5>
                      <p>{work.role}</p>
                    </div>

                    <div class="info">
                      <h5 class="mb-0 text-white">Year</h5>
                      <p>{work.year}</p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="info">
                      <h5 class="mb-0 text-white">Type</h5>
                      <p>{work.type}</p>
                    </div>
                    <div class="info">
                      <h5 className="mb-0 text-white">Share</h5>
                    </div>
                  </div>

                  <div class="mt-4">
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noreferrer"
                      class="btn btn-primary py-3 px-5"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
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
