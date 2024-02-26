import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "./Meta";
import data from "@/data/data";
import metas from "@/data/metaData";
import ScrollToTop from "./ScrollToTop";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button"

export default function SrzLayout({
  children,
  title,
  description,
  isContactPage = false,
}) {
  const socials = data.socials;
  const links = data.routes;

  const router = useRouter();
  const pathname = usePathname();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <Meta title={title} description={description} />


      <div className="container">

        <div className="relative">
          <nav className="md:py-2 px-4 md:px-5 flex justify-between items-center absolute z-50 w-full">
            <div>
              <Link href={"/"}>
                <h2 className="logo-title text-secondary">Srz</h2>
              </Link>
            </div>

            {/* nav */}
            <div className="md:block hidden">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`${link.title === 'works' ? (pathname === link.href || pathname.includes("/works/") ? "active-nav-item" : '') :
                    (pathname === link.href ? "active-nav-item" : "")
                    } nav-item text-white px-3 py-2  mx-2`}
                >
                  {link.title.toUpperCase()}
                </Link>
              ))}
            </div>

            {/* mobile nav */}
            <div className="md:hidden grid grid-cols-4 fixed left-0 right-0 bottom-0 bg-primary">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className={`
                      ${link.title === 'works' ? (pathname === link.href ||
                      pathname.includes("/works/") ? "active-mobile-nav-item" : "") :
                      (pathname === link.href ? "active-mobile-nav-item" : "")
                    } mobile-nav-item text-white flex justify-center items-center py-4`}
                >
                  <div className="me-2">{link.icon}</div>

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
          <div>
            {/*  page title  */}
            {title && (
              <div className="mb-6">
                <h1 className="text-2xl mb-0 text-white">
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
        <div className="flex md:flex-row flex-col items-center justify-between text-white py-4 md:mb-0 mb-16">
          <div className="text-center md:text-start mb-3 md:mb-0">
            <i class="fa-regular fa-copyright"></i> {currentYear} |&nbsp;
            <Link className="border-bottom text-secondary" href="/">
              {metas.user.name}
            </Link>
          </div>

          {/* hide these in contact page  */}
          {!isContactPage && (
            <div className="flex justify-center text-center md:text-start my-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  rel="noreferrer"
                  className="mx-1"
                  href={social.href}
                  target={"_blank"}
                >
                  <Button size="md">
                    {social.icon}
                  </Button>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
