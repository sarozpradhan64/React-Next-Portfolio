import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FrontendLayout from "@/components/layouts/FrontendLayout";
import WorkDetailSkeleton from "@/components/skeleton/WorkDetailSkeleton";
import ShareButton from "../_partials/ShareButton";
import workData from "@/data/workData";
import { Code, ExternalLink, MoveLeft } from "lucide-react";
import { Work } from "@/types/work";
import { notFound } from "next/navigation";
import metas from "@/data/metaData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const work = workData.find((w) => slug === w.slug);

  return {
    title: work ? `${work.title} - Works | ${metas.user.name}` : "Work Not Found",
    description: work ? work.description : "Details about the selected work.",
  };
}

export default async function Page({
  params,
}: {
  readonly params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  let works: null | Work[] = null;
  try {
    works = workData;
  } catch (error) {
    console.error("Error fetching works:", error);
  }

  const work: Work | null = works?.find((w) => slug === w.slug) || null;
  if (!work) {
    return notFound;
  }
  return (
    <FrontendLayout title={`${work?.title ?? ""}`}>
      {!work ? (
        <WorkDetailSkeleton />
      ) : (
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-2 w-full">
            <div className="relative job-detail__image-holder w-full rounded-xl">
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
              <Link
                className="cursor-pointer text-sm text-gray-500 hover:text-gray-200"
                href={"/works"}
              >
                <MoveLeft className="w-4 inline me-2" />
                Go Back
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
                  <p>{work.stacks.join(", ")}</p>
                </div>

                <div className="md:w-2/12">
                  <h5 className="md:mb-2 mb-0 text-white">Year</h5>
                  <p>{work.year}</p>
                </div>
              </div>

              <div className="mt-8 items-center">
                {work.href && (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    className="md:mx-2 text-primary"
                  >
                    <ExternalLink className="w-4 inline me-2" />
                    View Project
                  </a>
                )}

                {work.source && (
                  <a
                    href={work.source}
                    target="_blank"
                    rel="noreferrer"
                    className="md:mx-2 text-primary"
                  >
                    <Code className="w-4 inline me-2" />
                    Source Code
                  </a>
                )}

                <ShareButton title={work.title} url={`/works/${work.slug}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </FrontendLayout>
  );
}
