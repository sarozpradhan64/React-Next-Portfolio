import Head from "next/head";
import Image from "next/image";
import About1 from "../public/img/about-1.jpg";
import About2 from "../public/img/about-2.jpg";
import Link from "next/link";
import SrzLayout from "../components/SrzLayout";
import RevealOnScroll from "../components/Reveal";
import metas from "../src/metaData";
import Services from "../components/Services";
import HighlightedProject from "../components/HighlightedProject";
export default function Home({ featuredWorks }) {
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
                <h3 className="text-3xl text-primary mb-3 font-bold">Hi 👋, I&apos;m</h3>
                <h1 className="text-6xl mb-3 text-white">{metas.user.name}</h1>
                <h2 className="text-3xl text-white inline text-secondary">
                  {metas.user.whoAmI}
                </h2>
                <div className="text-light hidden">
                  Web Designer, Web Developer, Front End Developer, Apps
                  Designer, Apps Developer
                </div>
                <div className="flex  md:flex-row flex-col md:items-center items-start md:mt-10 mt-8">
                  <Link
                    href="/contact"
                    className="btn btn-primary py-3 px-4 me-3"
                  >
                    Work with me
                  </Link>

                  <Link
                    href="/works"
                    className="btn bg-red-700 text-white py-3 px-4 md:mt-0 mt-3"
                  >
                    Explore My Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <h2 className="mb-3 text-2xl font-medium text-white">Know About Me !</h2>

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

        <Services />

        <HighlightedProject data={featuredWorks} />


      </div>
    </SrzLayout>
  );
}


export async function getStaticProps() {
  const { works } = await import("../src/workData.json");
  const featuredWorks = works.filter((item) => item.is_featured === true);
  return {
    props: { featuredWorks },
  };
}