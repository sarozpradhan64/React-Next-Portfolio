import React from "react";
import Link from "next/link";
import metas from "@/data/metaData";
import Navigation from "./Navigation";
import { strTitle } from "@/utils/helpers/stringHelper";
import {
  ChevronRight,
  Copyright,
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
      href: "https://www.linkedin.com/in/saroj-pradhan-np/",
      icon: <Linkedin className="w-4" />,
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

        <div className="container mx-auto px-6">
          {/* children content  */}
          <div className="min-h-[80vh] py-12">
            <div className="max-w-7xl mx-auto">
              {/*  page title  */}
              {title && (
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-4">
                    <span className="w-2 h-12 bg-secondary rounded-full"></span>
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
          <div className="mt-24 mb-12 border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-slate-400 font-medium text-center md:text-start">
                <Copyright className="inline w-4 h-4 me-2" /> {currentYear} |&nbsp;
                <Link className="text-secondary hover:text-white transition-colors" href="/">
                  {metas.user.name}
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    rel="noreferrer"
                    className="p-3 bg-dark-lighter border border-white/5 rounded-xl text-slate-400 hover:text-white hover:border-secondary/50 transition-all duration-300"
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
        </div>
      </ActiveProvider>
    </>
  );
};

export default FrontendLayout;
