"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/Reveal";
import SrzLayout from "@/components/SrzLayout"
import metas from "@/data/metaData";
import About1 from "../../public/img/about-1.jpg";
import About2 from "../../public/img/about-2.jpg";
import Services from "@/components/Services";
import HighlightedProject from "@/components/HighlightedProject";


export default function Home() {

  return (
    <SrzLayout>
    <div>
      <div className="container" id="home">
        <div className="home-cover">
          <div className="absolute lg:w-[500px] lg:h-[500px] 2xl:right-[200px] lg:right-[100px] lg:top-[45%] -translate-y-[50%] lg:block hidden" >
            <Image
              src={metas.photoPath}
              fill
              alt={`${metas.user.name} Portfolio Photo`}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="home-container">
          <div className="grid lg:grid-cols-2 g-5 items-center">
            <div className=" py-6 pb-0 lg:pt-0">
              <h3 className="text-3xl text-primary mb-3 font-bold">Hi 👋, I&apos;m</h3>
              <h1 className="text-6xl mb-8 text-white">{metas.user.name}</h1>
              <h2 className="text-3xl text-white inline text-secondary">
                {metas.user.whoAmI}
              </h2>
              <div className="text-light hidden">
                Web Designer, Web Developer, Front End Developer, Apps
                Designer, Apps Developer
              </div>
              <div className="flex  md:flex-row flex-col md:items-center items-start md:mt-8 mt-6">
                <Link
                  href="/contact"
                  className="me-6 md:mb-0 mb-2"
                >
                  <Button>
                    Work with me
                  </Button>
                </Link>

                <Link
                  href="/works"
                >
                  <Button color="secondary">
                    Explore My Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <h2 className="mb-3 text-2xl font-medium text-white">Know About Me !</h2>
          <span class="h-[2px] bg-secondary w-20 mb-8 inline-block"></span>
          <p className="mb-4 text-justify">{metas.user.about}</p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3"></i>
            Demand Analysis
          </p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3"></i>A
            Quality Service
          </p>
          <p className="mb-3">
            <i className="far fa-check-circle text-primary me-3"></i>
            Client Satisfaction
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div>
            <RevealOnScroll revealGroupName="about-img">
              <Image
                className="rounded"
                src={About1}
                alt="about"

              />
            </RevealOnScroll>
          </div>
          <div>
            <RevealOnScroll revealGroupName={"about-img"}>
              <Image
                className="rounded"
                src={About2}
                alt="about 2"

              />
            </RevealOnScroll>
          </div>
        </div>

      </div>

<Services/>

      <HighlightedProject />


    </div>
  </SrzLayout>
  );
}
