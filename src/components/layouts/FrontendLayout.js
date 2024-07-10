import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "../Meta";
import data from "@/data/data";
import metas from "@/data/metaData";
import ScrollToTop from "../ScrollToTop";
import Button from "../Button";
import Navigation from "./Navigation";

export default function FrontendLayout({ children, title, description }) {
  const socials = data.socials;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <Meta title={title} description={description} />

      <Navigation />

      <div className="container">
        {/* children content  */}
        <div className="content-wrapper">
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
        </div>
        {/* children content end  */}

        {/* footer  */}
        <div className="flex md:flex-row flex-col items-center justify-between text-white py-4 md:mb-0 mb-16">
          <div className="text-center md:text-start mb-3 md:mb-0">
            <i className="fa-regular fa-copyright"></i> {currentYear} |&nbsp;
            <Link className="border-bottom text-secondary" href="/">
              {metas.user.name}
            </Link>
          </div>

          <div className="flex justify-center text-center md:text-start my-3">
            {socials.map((social, index) => (
              <a
                key={index}
                rel="noreferrer"
                className="mx-1"
                href={social.href}
                target={"_blank"}
              >
                <Button size="md">{social.icon}</Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
