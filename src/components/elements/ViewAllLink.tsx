import Link from "next/link";
import React from "react";
import { MoveRight } from "lucide-react";

const ViewAllLink = ({
  children,
  href,
  target,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      target={target || "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
    >
      {children}
      <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
    </Link>
  );
};

export default ViewAllLink;
