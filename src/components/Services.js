import Image from "next/image";
import React from "react";
import data from "@/data/data";
import RevealOnScroll from "./Reveal";

export default function Services() {
const services = data.services;
return (
<div className="mt-8">
    <h2 className="mb-3 text-2xl font-medium text-white">My Services !</h2>
    <span className="h-[2px] bg-secondary w-20 mb-8 inline-block"></span>
    <p className="text-justify">
        Whether you&apos;re looking to build a new website, develop a
        mobile app, improve your online visibility with digital marketing,
        or need help with any other aspect of your online presence, we
        have the skills and expertise to get the job done right. Explore
        my services to learn more about what i can do for you, and feel
        free to contact me if you have any questions or would like to
        discuss your project.
    </p>

    <div className="w-full flex justify-center items-center">
        <div className="md:w-4/5 md:p-16 flex flex-col gap-12 mt-8">
            {services.map((service, index) => (
            <div key={index} className="md:mb-0 mb-6">
                <RevealOnScroll className={"service-card"} revealGroupName={"service-card"}>

                    <div className="flex md:flex-row flex-col gap-4">
                        <div className="w-1/5 service-img-holder">
                            <Image className="object-cover" src={service.thumbnail} fill alt={service.title} />
                        </div>
                        <div className="md:w-4/5 md:ps-3">
                            <h5 className="text-lg text-white mb-6">{service.title}</h5>
                            <p>{service.description}</p>
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
