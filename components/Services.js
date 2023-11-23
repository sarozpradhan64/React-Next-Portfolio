import Image from "next/image";
import React from "react";
import data from "../src/data";
import RevealOnScroll from "./Reveal";

export default function Services() {
  const services = data.services;
  return (
    <div className="mt-5 ">
      <div className="flex align-items-center mb-3">
        <h3 className="lh-base mb-0 text-white">My Services !</h3>
      </div>
      <p className="text-justify">
        Whether you&apos;re looking to build a new website, develop a
        mobile app, improve your online visibility with digital marketing,
        or need help with any other aspect of your online presence, we
        have the skills and expertise to get the job done right. Explore
        my services to learn more about what i can do for you, and feel
        free to contact me if you have any questions or would like to
        discuss your project.
      </p>
      <div className="grid md:grid-cols-2 md:gap-x-5 mt-4 ">
        {services.map((service, index) => (
          <div key={index} className="md:mb-0 mb-6">
            <RevealOnScroll
              className={"service-card"}
              revealGroupName={"service-card"}
            >

              <div className="flex md:gap-y-0">
                <div className="md:block hidden service-img-holder self-center">
                  <Image
                    className="object-cover"
                    src={service.thumbnail}
                    height={400}
                    width={400}
                    alt={service.title}
                  />
                </div>
                <div className="md:ps-3">
                  <h5 className="text-white">{service.title}</h5>
                  <p className="">{service.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        ))}
      </div>

    </div>
  );
}
