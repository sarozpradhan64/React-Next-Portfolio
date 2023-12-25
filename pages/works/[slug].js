import React from "react";
import Image from "next/image";
import SrzLayout from "../../components/SrzLayout";
import metas from "../../src/metaData";
import Link from "next/link";
import { useRouter } from "next/router";

export default function WorkDetail({ work }) {

  const router = useRouter();
  
  if (router.isFallback) {
    return <div className="text-white">Loading...</div>
  }

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
    <SrzLayout title={`${work.title}`}>
      <div className="grid md:grid-cols-5 gap-4">
        <div
          className="md:col-span-2 w-full"
        >
          <div className="relative job-detail__image-holder w-full">
            <Image
              src={work.image}
              alt={`saroj pradhan's work ${work.title}`}
              className=" object-cover"
              fill
            />
          </div>
        </div>

        <div className="md:col-span-3 md:ps-8">
          <div className="mb-3">
            <Link className="pointer" href={"/works"}>
              <i class="fa-solid fa-arrow-left-long me-2"></i>Go Back
            </Link>
          </div>
          <div className="project-info">
            <p className="text-justify">{work.description}</p>

            {/* detail list  */}
            <div className="flex md:flex-row flex-col md:gap-0 gap-y-4 mt-4">
              <div className="md:w-2/12">
                <h5 className="md:mb-2 mb-0 text-white">Type</h5>
                <p>{work.type}</p>
              </div>
              <div className="md:w-4/12">
                <h5 className="md:mb-2 mb-0 text-white">Role</h5>
                <p>{work.role}</p>
              </div>

              <div className="md:w-4/12">
                <h5 className="md:mb-2 mb-0 text-white">Tech Stack</h5>
                <p>{work.stack}</p>
              </div>

              <div className="md:w-2/12">
                <h5 className="md:mb-2 mb-0 text-white">Year</h5>
                <p>{work.year}</p>
              </div>
            </div>

            <div className="mt-8 items-center">
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="md:mx-2"
              >
                <i className="me-1 fa-solid fa-arrow-up-right-from-square"></i>
                View Project
              </a>

              {work.source !== "" && (
                <a
                  href={work.source}
                  target="_blank"
                  rel="noreferrer"
                  className="md:mx-2"
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
  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  // console.log(context.params.slug);
  const { works } = await import("../../src/workData.json");
  const work = works.find((w) => context.params.slug === w.slug);
  return {
    props: { work },
  };
}
