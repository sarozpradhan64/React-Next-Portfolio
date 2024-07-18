import Image from "next/image";
import React from "react";
import data from "@/data/data";
import RevealOnScroll from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const services = data.services;
  return (
    <div className="mt-32">
      <SectionTitle title={"My Services !"} />
      <p className="text-justify">
        Whether you&apos;re looking to build a new website, develop a mobile
        app, improve your online visibility with digital marketing, or need help
        with any other aspect of your online presence, we have the skills and
        expertise to get the job done right. Explore my services to learn more
        about what i can do for you, and feel free to contact me if you have any
        questions or would like to discuss your project.
      </p>

      <div className="w-full flex justify-center items-center">
        <div className="mt-8 grid md:grid-cols-2 md:gap-6 gap-4">
          {services.map((service, index) => (
            <div key={index}>
              <RevealOnScroll
                className={"service-card"}
                revealGroupName={"service-card"}
              >
                <div className="bg-[#1C1F26] sm:p-4 p-2 flex flex-row  md:gap-4 gap-2  rounded-md border border-transparent hover:border-gray-600">
                  <div className="md:w-1/5 min-h-[60px] w-[30%] relative">
                    <Image
                      src={service.thumbnail}
                      fill
                      alt={service.title}
                    />
                  </div>
                  <div className="md:w-4/5 w-[70%]">
                    <h5 className="sm:text-md text-sm text-white sm:mb-2 mb-1">
                      {service.title}
                    </h5>
                    <p className="sm:text-sm text-xs md:leading-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
