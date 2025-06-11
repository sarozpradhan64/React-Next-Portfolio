import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Work } from "@/types/work";
import Badge from "./Badge";

const WorkCard = ({ work }: { work: Work }) => {
  return (
    <div
      className="portfolio-img rounded-xl relative"
      style={{ height: "250px" }}
    >
      <Image
        className="img-fluid object-cover"
        src={work.image}
        alt={work.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="portfolio-btn z-[100] rounded-xl absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link href={`/works/${work.slug}`}>
          <h4 className="portfolio-hover-title text-white text-center hover:underline">
            {work.title}
          </h4>
        </Link>
      </div>
      <div className="absolute z-50 bottom-2 left-2">
        <h4 className="text-white mb-2">{work.title}</h4>
        <div className="space-x-2">
          {work.stacks.map((stack, index) => (
            <Badge key={index} color={"gray"}>
              {stack}
            </Badge>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    </div>
  );
};

export default WorkCard;
