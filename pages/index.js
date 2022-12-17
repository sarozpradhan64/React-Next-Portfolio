import Head from "next/head";
import Image from "next/image";
import About1 from "../public/img/about-1.jpg";
import About2 from "../public/img/about-2.jpg";
import Link from "next/link";
import SrzLayout from "../components/SrzLayout";
export default function Home() {

  return (
    <SrzLayout>
      <div>
        {" "}
        <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
          <div className="container-fluid my-6 mt-0" id="home">
            <div className="home-cover">
              <Image
                src={"/img/cover.jpg"}
                fill
                alt="Saroj Pradhan portfolio cover image"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="home-container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                  <h3 className="text-primary mb-3 fw-bold">Hi 👋,I&apos;m</h3>
                  <h1 className="display-3 mb-3 text-white">Saroj Pradhan</h1>
                  <h2 className="typed-text-output d-inline text-secondary">
                    Web Developer
                  </h2>
                  <div className="typed-text d-none">
                    Web Designer, Web Developer, Front End Developer, Apps
                    Designer, Apps Developer
                  </div>
                  <div className="d-flex align-items-center pt-5">
                    <Link
                      rel="noreferrer"
                      href="/contact"
                      className="btn btn-primary py-3 px-4 me-5"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-xxl py-5" id="about">
            <div className="container ">
              <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-5">
                    <h3 className="lh-base mb-0 text-white">Know About Me !</h3>
                  </div>
                  <p className="mb-4">
                    I am Web developer with experience in PHP/Laravel and
                    Python/Django. And for frontend, I&apos;d prefer Reactjs.
                  </p>
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
                      <Image
                        className="img-fluid rounded"
                        src={About1}
                        alt="about"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Image
                        className="img-fluid rounded"
                        src={About2}
                        alt="about 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </SrzLayout>
  );
}
