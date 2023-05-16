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
        <div className="container-fluid" id="home">
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
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                <h3 className="text-primary mb-3 fw-bold">Hi 👋, I&apos;m</h3>
                <h1 className="display-3 mb-3 text-white">{metas.user.name}</h1>
                <h2 className="typed-text-output d-inline text-secondary">
                  {metas.user.whoAmI}
                </h2>
                <div className="typed-text d-none">
                  Web Designer, Web Developer, Front End Developer, Apps
                  Designer, Apps Developer
                </div>
                <div className="d-flex  flex-md-row flex-column align-items-md-center align-items-start pt-5">
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

        <div className="container-xxl" id="about">
          <div className="container ">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <h3 className="lh-base mb-0 text-white">Know About Me !</h3>
                </div>
                <p className="mb-4 text-justify">{metas.user.about}</p>
                <p className="mb-3">
                  <i className="far fa-check-circle text-primary me-3"></i>
                  Demand Analysis
                </p>
                <p className="mb-3">
                  <i className="far fa-check-circle text-primary me-3"></i>A
                  Quality Product
                </p>
                <p className="mb-3">
                  <i className="far fa-check-circle text-primary me-3"></i>
                  Client Satisfaction
                </p>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <RevealOnScroll revealGroupName="about-img">
                      <Image
                        className="img-fluid rounded"
                        src={About1}
                        alt="about"
                      />
                    </RevealOnScroll>
                  </div>
                  <div className="col-sm-6">
                    <RevealOnScroll revealGroupName={"about-img"}>
                      <Image
                        className="img-fluid rounded"
                        src={About2}
                        alt="about 2"
                      />
                    </RevealOnScroll>
                  </div>
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
