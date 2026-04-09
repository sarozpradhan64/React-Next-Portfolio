import React from "react";
import Link from "next/link";
import Image from "next/image";
import metas from "@/data/metaData";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] py-12 gap-12">
      <div className="flex-1 text-center lg:text-start">
        <h3 className="text-xl md:text-2xl text-secondary mb-4 font-bold tracking-widest uppercase">
          Hi 👋, I&apos;m
        </h3>
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white font-extrabold leading-none">
          {metas.user.name} <br />
          <span className="text-3xl pb-6 md:text-4xl lg:text-5xl inline-block mt-4 bg-gradient-to-r from-secondary to-orange-400 bg-clip-text text-transparent font-bold">
            {metas.user.whoAmI}
          </span>
        </h1>
        
        <p className="max-w-xl text-slate-400 text-lg mb-10 mx-auto lg:mx-0">
          Crafting exceptional digital experiences with modern technologies and a focus on performance and usability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto px-10">Work with me</Button>
          </Link>

          <Link href="/works" className="w-full sm:w-auto">
            <Button color="transparent" outline="light" className="w-full sm:w-auto px-10">
              Explore My Works
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
          {/* Animated background elements */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full rotate-6 scale-105"></div>
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src={metas.photoPath}
              fill
              alt={`${metas.user.name} Portfolio Photo`}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
