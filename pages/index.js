import Head from "next/head";
import Image from "next/image";
import About1 from "../public/img/about-1.jpg";
import About2 from "../public/img/about-2.jpg";
import Link from "next/link";
import SrzLayout from "../components/SrzLayout";
import RevealOnScroll from "../components/Reveal";
import metas from "../src/metaData";
import Services from "../components/Services";
export default function Home() {
  return (
    <SrzLayout>
      <div>
        <div className="container" id="home">
          <div className="home-cover">
            <Image
              src={"/img/cover.jpg"}
              fill
              className="home-cover-image"
              alt={`${metas.user.name} portfolio cover image`}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="home-container">
            <div className="grid lg:grid-cols-2 g-5 items-center">
              <div className=" py-6 pb-0 lg:pt-0">
                <h3 className="text-primary mb-3 fw-bold">Hi 👋, I&apos;m</h3>
                <h1 className="display-3 mb-3 text-white">{metas.user.name}</h1>
                <h2 className="text-light inline text-secondary">
                  {metas.user.whoAmI}
                </h2>
                <div className="text-light hidden">
                  Web Designer, Web Developer, Front End Developer, Apps
                  Designer, Apps Developer
                </div>
                <div className="flex  md:flex-row flex-col items-md-center items-start pt-5">
                  <Link
                    href="/contact"
                    className="btn btn-primary py-3 px-4 me-3"
                  >
                    Work with me
                  </Link>

                  <Link
                    href="/works"
                    className="btn btn-danger py-3 px-4 mt-md-0 mt-3"
                  >
                    Explore My Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="flex align-items-center mb-3">
                <h3 className="lh-base mb-0 text-white">Know About Me !</h3>
              </div>
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
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
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
          </div>
        </div>

        <Services />
      </div>
    </SrzLayout>
  );
}
