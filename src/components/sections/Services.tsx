import Image from "next/image";
import React from "react";
import data from "@/data/data";
import RevealOnScroll from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function Services() {
  const services = data.services;
  return (
    <div className="py-24">
      <div className="max-w-3xl mb-16 text-center mx-auto">
        <SectionTitle title={"Services"} />
        <p className="text-lg text-slate-400 leading-relaxed">
          From concept to deployment, I provide comprehensive digital solutions 
          leveraging modern stacks to help you achieve your business goals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <RevealOnScroll
            key={index}
            className={"h-full"}
            revealGroupName={"service-card"}
          >
            <div className="h-full bg-dark-lighter p-8 rounded-3xl border border-white/5 hover:border-secondary/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 group shadow-premium hover:shadow-premium-hover">
              <div className="w-16 h-16 shrink-0 relative p-3 bg-primary/10 rounded-2xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Image 
                  src={service.thumbnail} 
                  fill 
                  alt={service.title} 
                  className="p-3 object-contain"
                />
              </div>
              <div>
                <h5 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h5>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
