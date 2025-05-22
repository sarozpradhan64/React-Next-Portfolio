import React from "react";
import Link from "next/link";
import Image from "next/image";
import metas from "@/data/metaData";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-between h-[65vh]">
      <div>
        <h3 className="text-3xl text-primary mb-3 font-bold">
          Hi 👋, I&apos;m
        </h3>
        <h1 className="text-6xl mb-8 text-white font-medium">
          {metas.user.name} <br />
          <span className="text-3xl inline text-secondary">
            {metas.user.whoAmI}
          </span>
        </h1>
        <div className="text-light hidden">
          Web Designer, Web Developer, Front End Developer, Apps Designer, Apps
          Developer
        </div>
        <div className="flex  md:flex-row flex-col md:items-center items-start md:mt-8 mt-6">
          <Link href="/contact" className="me-6 md:mb-0 mb-2">
            <Button>Work with me</Button>
          </Link>

          <Link href="/works">
            <Button color="light">Explore My Works</Button>
          </Link>
        </div>
      </div>

      <div className=" lg:block hidden">
        <div className=" relative xxl:w-[480px] xxl:h-[480px] w-[380px] h-[380px]">
          <Image
            src={metas.photoPath}
            fill
            alt={`${metas.user.name} Portfolio Photo`}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
