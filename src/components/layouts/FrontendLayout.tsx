import React from "react";
import Link from "next/link";
import metas from "@/data/metaData";
import Navigation from "./Navigation";
import { strTitle } from "@/utils/helpers/stringHelper";
import {
  ChevronRight,
  Copyright,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { ActiveProvider } from "@/context/ActiveContext";
import LeaderBoard from "../ads/LeaderBoard";

interface FrontendLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const FrontendLayout: React.FC<FrontendLayoutProps> = ({ children, title }) => {
  const socials = [
    {
      title: "github",
      href: "https://github.com/sarozpradhan64",
      icon: <Github className="w-4" />,
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/saroj-pradhan-4628831a1/",
      icon: <Linkedin className="w-4" />,
    },
    {
      title: "facebook",
      href: "https://facebook.com/srz.prdhn",
      icon: <Facebook className="w-4" />,
    },
    {
      title: "instagram",
      href: "https://instagram.com/srz.prdhn",
      icon: <Instagram className="w-4" />,
    },
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <ActiveProvider>
        <Navigation />
        <LeaderBoard />

        <div className="container">
          {/* children content  */}
          <div className="content-wrapper">
            <div>
              {/*  page title  */}
              {title && (
                <div className="mb-6">
                  <h1 className="text-2xl mb-0 text-white">
                    <ChevronRight
                      className=" inline me-2 animate-bounce"
                      size={32}
                    />{" "}
                    {title}
                  </h1>
                </div>
              )}
              {/* page title end  */}
              {children}
            </div>
          </div>
          {/* children content end  */}

          {/* footer  */}
          <div className="md:mt-32 mt-16 md:mb-0 mb-4 border-t border-gray-600"></div>
          <div className="flex md:flex-row flex-col items-center justify-between text-white py-4 md:mb-0 mb-16">
            <div className="text-center md:text-start mb-3 md:mb-0">
              <Copyright className="inline w-4 me-1" /> {currentYear} |&nbsp;
              <Link className="border-bottom text-secondary" href="/">
                {metas.user.name}
              </Link>
            </div>

            <div className="flex justify-center text-center gap-4 md:text-start my-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  rel="noreferrer"
                  className="mx-1"
                  href={social.href}
                  target={"_blank"}
                  title={strTitle(social.title)}
                >
                  {social.icon}
                  <span className="sr-only">{social.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </ActiveProvider>
    </>
  );
};

export default FrontendLayout;
