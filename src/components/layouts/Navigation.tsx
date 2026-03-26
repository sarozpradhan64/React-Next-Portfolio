"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BriefcaseBusiness, House, Mail } from "lucide-react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const links = [
  {
    title: "home",
    href: "/",
    isExternal: false,
    icon: <House className="w-4 inline md:me-4 me-2" />,
  },

  {
    title: "works",
    isExternal: false,
    href: "/works",
    icon: <BriefcaseBusiness className="w-4 inline md:me-4 me-2" />,
  },
  {
    title: "contact",
    isExternal: false,
    href: "/contact",
    icon: <Mail className="w-4 inline md:me-4 me-2" />,
  },
  {
    title: "blogs",
    isExternal: true,
    href: "https://blazecodes.sarojpradhan.com.np/?utm_source=saroj-portfolio&utm_id=blazecodes-srz",
    icon: <BriefcaseBusiness className="w-4 inline md:me-4 me-2" />,
  },
];

const Navigation = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0 });

    const handleScroll = () => {
      const scrollUntil = isHomePage ? 500 : 0;

      if (window.scrollY > scrollUntil) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isSticky 
            ? "sticky top-0 bg-dark/80 backdrop-blur-md border-b border-white/10" 
            : "relative bg-dark"
        } md:block hidden z-50 transition-all duration-300`}
      >
        <div className="container mx-auto">
          <nav className="py-4 px-6 flex justify-between items-center w-full">
            <div>
              <Link href={"/"} className="group transition-transform duration-300 hover:scale-105 inline-block">
                <h2 className="logo-title text-secondary group-hover:text-white transition-colors">Srz</h2>
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              {links.map((link, index) => {
                const isActive = link.title === "works"
                  ? pathname === link.href || pathname.includes("/works/")
                  : pathname === link.href;
                
                return (
                  <Link
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    key={index}
                    className={`
                      relative py-2 text-sm font-medium tracking-wide transition-all duration-300
                      ${isActive ? "text-secondary" : "text-slate-300 hover:text-white"}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                      after:bg-secondary after:transform after:transition-transform after:duration-300
                      ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                    `}
                  >
                    {link.title.toUpperCase()}
                    {link.isExternal && (
                      <ArrowTopRightOnSquareIcon className="h-3 w-3 inline mb-1 ml-1 opacity-70" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* mobile nav */}
      <div className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50">
        <div className="bg-dark-lighter/90 backdrop-blur-xl border border-white/10 rounded-2xl grid grid-cols-4 p-2 shadow-2xl overflow-hidden">
          {links.map((link, index) => {
            const isActive = link.title === "works"
              ? pathname === link.href || pathname.includes("/works/")
              : pathname === link.href;

            return (
              <Link
                href={link.href}
                key={index}
                className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl transition-all duration-300
                  ${isActive ? "bg-primary text-white shadow-lg" : "text-slate-400 hover:text-slate-100"}
                `}
              >
                <div className={`${isActive ? "scale-110" : ""} transition-transform duration-300`}>
                  {link.icon}
                </div>
                <span className="text-[10px] font-bold mt-1">
                  {link.title.toUpperCase()}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* mobile nav end  */}
    </>
  );
};

export default Navigation;
