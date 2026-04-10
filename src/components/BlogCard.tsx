import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import Badge from "./Badge";
import { ExternalLink } from "lucide-react";

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const imageUrl = blog.thumbnail_path || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group rounded-3xl overflow-hidden relative aspect-[4/3] bg-dark-lighter border border-white/5 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover">
      <Image
        className="img-fluid object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
        src={imageUrl}
        alt={blog.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Bottom Info */}
      <div className="absolute z-20 bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-3">
          <Badge color="blue">{blog.post_category.title}</Badge>
        </div>
        <h4 className="text-md md:text-xl font-semibold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
         <Link href={blog.detail} target="_blank" rel="noopener noreferrer">{blog.title} <ExternalLink className="h-4 w-4 inline" /></Link>
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
