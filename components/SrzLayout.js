import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "./Meta";
import data from "../src/data";
import metas from "../src/metaData";
export default function SrzLayout({ children, title, isContactPage = false }) {
  const socials = data.socials;
  const links = data.routes;
  return (
    <div>
      <Meta />
      <nav className="navbar py-4 px-4 px-5 d-flex justify-content-between">
        <div>
          <Link href={"/"}>
            <h2 className="logo-title h1 fw-bold text-primary">SRZ.</h2>
          </Link>
        </div>

        {/* nav */}
        <div>
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-white px-3 py-2 mx-2 rounded-pill"
            >
              {link.title.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      {/* children content  */}
      <div className="" style={{ padding: "100px 0px" }}>
        <div className="container">
          {/*  page title  */}
          {title && (
            <div className="mb-4">
              <h1 className="display-5 mb-0 text-white">
                <i class="fa-solid fa-caret-right"></i> {title}
              </h1>
            </div>
          )}
          {/* page title end  */}
          {children}
        </div>
      </div>
      {/* children content end  */}

      {/* footer  */}
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <Link className="border-bottom text-secondary" href="/">
                {metas.user.name}
              </Link>
            </div>

            {/* hide these in contact page  */}
            {!isContactPage && (
              <div className="col-md-6 d-flex justify-content-md-end justify-content-center text-center text-md-start mb-3 mb-md-0">
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

      <a
        rel="noreferrer"
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
