import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "./Meta";
import data from "../src/data";
import metas from "../src/metaData";
import ScrollToTop from "./ScrollToTop";
import { useRouter } from "next/router";

export default function SrzLayout({
  children,
  title,
  description,
  isContactPage = false,
}) {
  const socials = data.socials;
  const links = data.routes;

  const router = useRouter();
  return (
    <>
      <Meta title={title} description={description} />


      <div className="container">

        <div className="relative">
          <nav className="md:py-2 px-4 md:px-5 flex justify-between items-center absolute z-50 w-full">
            <div>
              <Link href={"/"}>
                <h2 className="logo-title text-primary">SRZ.</h2>
              </Link>
            </div>

            {/* nav */}
            <div className="md:block hidden">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  // ${router.asPath.startsWith("/jobseeker/update-profile")
                  className={`${link.title === 'works' ? (router.pathname === link.href || router.asPath.startsWith("/works/") ? "active-nav-item" : '') :
                    (router.pathname === link.href ? "active-nav-item" : "")
                    } nav-item text-white px-3 py-2  mx-2`}
                >
                  {link.title.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* mobile nav */}
            <div className="md:hidden flex justify-around position-fixed start-0 end-0 bottom-0 bg-primary">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`

             ${link.title === 'works' ? (router.pathname === link.href || router.asPath.startsWith("/works/") ? "active-mobile-nav-item" : '') :
                      (router.pathname === link.href ? "active-mobile-nav-item" : "")

                    } mobile-nav-item text-white flex py-1 px-2 flex-column justify-between items-center
               mx-1`}
                >
                  <div className="fs-5">{link.icon}</div>

                  <span style={{ fontSize: "12px" }}>
                    {link.title.toUpperCase()}
                  </span>
                </Link>
              ))}
            </div>
            {/* mobile nav end  */}
          </nav >
        </div>


        {/* children content  */}
        < div className="content-wrapper" >
          <div className="container">
            {/*  page title  */}
            {title && (
              <div className="mb-md-5 mb-3">
                <h1 className="display-5 mb-0 text-white">
                  <i className="fa-solid fa-caret-right"></i> {title}
                </h1>
              </div>
            )}
            {/* page title end  */}
            {children}
          </div>
        </div >
        {/* children content end  */}

        {/* footer  */}
        <div className="text-white py-4 md:mb-0 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 md:mb-0">
                <Link className="border-bottom text-secondary" href="/">
                  {metas.user.name}
                </Link>
              </div>

              {/* hide these in contact page  */}
              {!isContactPage && (
                <div className="col-md-6 flex justify-content-md-end justify-content-center text-center text-md-start mb-3 mb-md-0">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      rel="noreferrer"
                      className="btn btn-square btn-primary mx-1 fs-5"
                      href={social.href}
                      target={"_blank"}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
    </>
  );
}
