import Head from "next/head";
import Image from "next/image";
import About1 from '../public/img/about-1.jpg'
import About2 from '../public/img/about-2.jpg'
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Head>
      <title>Saroj Pradhan</title>
    </Head>
      <div>
        {" "}
        <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
          <nav
            className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <a  rel="noreferrer" href="index.html" className="navbar-brand d-block d-lg-none">
              <h1 className="text-primary fw-bold m-0">ProMan</h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
              id="navbarCollapse"
            >
              <div className="navbar-nav ms-auto py-0">
                <a  rel="noreferrer" href="#home" className="nav-item nav-link active">
                  Home
                </a>
                <a  rel="noreferrer" href="#about" className="nav-item nav-link">
                  About
                </a>
                <a  rel="noreferrer" href="#skill" className="nav-item nav-link">
                  Skills
                </a>
                <a  rel="noreferrer" href="#service" className="nav-item nav-link">
                  Services
                </a>
              </div>
              <div className="navbar-nav me-auto py-0">
                <a  rel="noreferrer" href="#project" className="nav-item nav-link">
                  Projects
                </a>
                <a  rel="noreferrer" href="#team" className="nav-item nav-link">
                  Team
                </a>
                <a  rel="noreferrer" href="#testimonial" className="nav-item nav-link">
                  Testimonial
                </a>
                <a  rel="noreferrer" href="#contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>

          <div className="container-fluid bg-light my-6 mt-0" id="home">
            <div className="container">
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
                    <a  rel="noreferrer"
                      href="#contact"
                      className="btn btn-primary py-3 px-4 me-5"
                    >
                      Contact Me
                    </a>
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
                    Python/Django. As for frontend, I&apos;d prefer Reactjs.
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

          <div className="container-xxl py-6 pt-5" id="project">
            <div className="container">
              <div
                className="row g-5 mb-5 align-items-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-lg-6">
                  <h1 className="display-5 mb-0 text-white">My Works</h1>
                </div>
                {/* <div className="col-lg-6 text-lg-end">
                  <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                    <li className="mx-3 active" data-filter="*">
                      All Projects
                    </li>
                    <li className="mx-3 text-white" data-filter=".first">
                      UI/UX Design
                    </li>
                    <li className="mx-3 text-white" data-filter=".second">
                      Graphic Design
                    </li>
                  </ul>
                </div> */}
              </div>
              <div
                className="row g-4 portfolio-container wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="col-lg-4 col-md-6 portfolio-item second">
                  <div className="portfolio-img  rounded overflow-hidden" style={{height:'100%'}}>
                    <Image
                      className="img-fluid"
                      src="/img/project-4.jpg"
                      alt="gyannhub"
                      layout="fill"
                    />
                    <div className="portfolio-btn">
                      <a  rel="noreferrer" target={'_blank'}
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="/img/project-4.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a  rel="noreferrer"
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="https://gyannhub.com"
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                  <div className="portfolio-img rounded overflow-hidden">
                    <Image
                      className="img-fluid"
                      src="/img/project-5.jpg"
                      alt="blazecodes"
                      layout="fill"
                    />
                    <div className="portfolio-btn">
                      <a  rel="noreferrer"
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="/img/project-5.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <a  rel="noreferrer" target={'_blank'}
                        className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                        href="https://blazecodes.com"
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-xxl pb-5" id="contact">
            <div className="container py-5">
              <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                  <h1 className="display-5 mb-0 text-white">
                    Let&apos;s Work Together
                  </h1>
                </div>
              </div>
              <div className="row g-5">
                <div
                  className="col-lg-5 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <p className="mb-2">Address:</p>
                  <h3 className="fw-bold text-white">Lalitpur, Nepal</h3>
                  <hr className="w-100" />
                  <p className="mb-2">Mail me:</p>
                  <h3 className="fw-bold text-white">
                    sarozpradhan64@gmail.com
                  </h3>
                  <hr className="w-100" />
                  <p className="mb-2">Follow me:</p>
                  <div className="d-flex pt-2">
                    {/* <a  rel="noreferrer" className="btn btn-square btn-primary me-2" href="">
                      <i className="fab fa-twitter"></i>
                    </a> */}
                    <a  rel="noreferrer"
                      className="btn btn-square btn-primary me-2"
                      href="https://github.com/sarozpradhan64"
                      target={"_blank"}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a  rel="noreferrer"
                      className="btn btn-square btn-primary me-2"
                      href="https://facebook.com/srz.prdhn"
                      target={"_blank"}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a  rel="noreferrer"
                      className="btn btn-square btn-primary me-2"
                      href="https://www.linkedin.com/in/saroj-pradhan-4628831a1/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <form method="post" name="contact-form" netlify>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary py-3 px-5"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid bg-dark text-white py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  <Link className="border-bottom text-secondary" href="/">
                    Saroj Pradhan
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <a  rel="noreferrer"
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up"></i>
          </a>
        </body>
      </div>
    </>
  );
}
