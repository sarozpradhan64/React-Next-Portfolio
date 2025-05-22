"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import data from "@/data/data";
import { BriefcaseBusiness, House, Mail } from "lucide-react";

const Navigation = () => {
  const links = [
    {
      title: "home",
      href: "/",
      isExternal: false,
      icon: <House className="w-4 inline me-4" />,
    },

    {
      title: "works",
      isExternal: false,
      href: "/works",
      icon: <BriefcaseBusiness className="w-4 inline me-4" />,
    },
    {
      title: "blogs",
      isExternal: true,
      href: "https://blazecodes.pradhansaroj.com.np/?utm_source=saroj-portfolio&utm_id=blazecodes-srz",
      icon: <BriefcaseBusiness className="w-4 inline me-4" />,
    },
    {
      title: "contact",
      isExternal: false,
      href: "/contact",
      icon: <Mail className="w-4 inline me-4" />,
    },
  ];
  const pathname = usePathname();

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0 });

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // remove event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          isSticky ? "sticky shadow-sm" : ""
        }  md:block hidden navigation_wrapper`}
      >
        <div className="container">
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
                    {link.title.toUpperCase()}
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
            <div className="me-1">{link.icon}</div>

            <span style={{ fontSize: "12px" }}>{link.title.toUpperCase()}</span>
          </Link>
        ))}
      </div>
      {/* mobile nav end  */}
    </>
  );
};

export default Navigation;
