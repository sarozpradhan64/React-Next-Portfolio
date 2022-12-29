import React from "react";
import Image from "next/image";
import SrzLayout from "../../components/SrzLayout";
import metas from "../../src/metaData";
import { useRouter } from "next/router";
import Link from "next/link";
export default function workDetail({ work }) {
  console.log(work);
  const router = useRouter();
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
    <SrzLayout>
      <div className="container-xxl" id="project">
        <div className="container">
          <div className="row g-5 mb-5 align-items-center">
            <div className="col-md-12 d-flex align-items-center">
              <Link href="/works">
                <button className="btn btn-primary btn-lg me-5">Go Back</button>
              </Link>
              <h1 className="display-5 mb-0 text-white">{work.title}</h1>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-6 position-relative"
              style={{ minHeight: "60vh" }}
            >
              <Image
                src={work.image}
                alt={`saroj pradhan's work ${work.title}`}
                class="img-fluid  w-100 object-cover"
                fill
              />
            </div>

            <div class="col-lg-6 my-3 ps-md-4">
              <div class="project-info">
                <h3 class="mb-4 text-white">{work.title}</h3>
                <p className="text-justify">{work.description}</p>

                <p className="text-justify">{work.task}</p>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <div class="info">
                      <h5 class="mb-0 text-white">Role</h5>
                      <p>{work.role}</p>
                    </div>

                    <div class="info">
                      <h5 class="mb-0 text-white">Year</h5>
                      <p>{work.year}</p>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="info">
                      <h5 class="mb-0 text-white">Type</h5>
                      <p>{work.type}</p>
                    </div>
                    <div class="info">
                      <h5 className="mb-0 text-white">Share</h5>
                      <i
                        class="fa-solid fa-share-nodes fs-3 pointer"
                        onClick={() => handleShare()}
                      ></i>
                    </div>
                  </div>

                  <div class="mt-4">
                    <a
                      href={work.href}
                      target="_blank"
                      rel="noreferrer"
                      class="btn btn-primary py-3 px-5 mx-md-2 my-2"
                    >
                      View Project
                    </a>
                    {work.source !== "" && (
                      <a
                        href={work.source}
                        target="_blank"
                        rel="noreferrer"
                        class="btn btn-danger py-3 px-5 mx-md-2 my-2"
                      >
                        Source Code
                      </a>
                    )}
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
