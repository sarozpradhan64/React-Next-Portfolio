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
  // {
  //   title: "blogs",
  //   isExternal: true,
  //   href: "https://blazecodes.sarojpradhan.com.np/?utm_source=saroj-portfolio&utm_id=blazecodes-srz",
  //   icon: <BriefcaseBusiness className="w-4 inline md:me-4 me-2" />,
  // },
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
          isSticky ? "sticky" : ""
        }  md:block hidden navigation_wrapper`}
      >
        <div
          className={`container ${isSticky ? "border-b border-gray-700" : ""}`}
        >
          <nav className=" md:py-2 px-4 md:px-5 flex justify-between items-center  w-full">
            <div>
              <Link href={"/"}>
                <h2 className="logo-title text-secondary">Srz</h2>
              </Link>
            </div>

            <div>
              {/* nav */}
              <div className="">
                {links.map((link, index) => (
                  <Link
                    href={link.href}
                    target={link.isExternal ? "_blank" : "_self"}
                    key={index}
                    className={`${
                      link.title === "works"
                        ? pathname === link.href || pathname.includes("/works/")
                          ? "active-nav-item"
                          : ""
                        : pathname === link.href
                        ? "active-nav-item"
                        : ""
                    } nav-item text-white px-3 py-2  mx-2`}
                  >
                    {link.title.toUpperCase()}{" "}
                    {link.isExternal && (
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 inline mb-1 ml-1" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* mobile nav */}
      <div className="md:hidden grid grid-cols-4 fixed left-0 right-0 z-50 bottom-0 bg-primary">
        {links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`
                      ${
                        link.title === "works"
                          ? pathname === link.href ||
                            pathname.includes("/works/")
                            ? "active-mobile-nav-item"
                            : ""
                          : pathname === link.href
                          ? "active-mobile-nav-item"
                          : ""
                      } mobile-nav-item text-white flex justify-center items-center py-4`}
          >
            <div>{link.icon}</div>

            <span style={{ fontSize: "12px" }}>
              {link.title.toUpperCase()}{" "}
              {link.isExternal && (
                <ArrowTopRightOnSquareIcon className="h-3 w-3 inline mb-1" />
              )}
            </span>
          </Link>
        ))}
      </div>
      {/* mobile nav end  */}
    </>
  );
};

export default Navigation;
