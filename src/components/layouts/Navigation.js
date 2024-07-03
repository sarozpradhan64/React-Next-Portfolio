"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import data from '@/data/data';

const Navigation = () => {
    const links = data.routes;
    const pathname = usePathname();
    
  return (
    <div>
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
    </div>
  )
}

export default Navigation