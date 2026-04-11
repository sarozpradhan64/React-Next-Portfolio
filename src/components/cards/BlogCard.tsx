import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import Badge from "../Badge";
import { ExternalLink } from "lucide-react";

const BlogDetailLink = ({
  blog,
  children,
}: {
  blog: BlogPost;
  children: React.ReactNode;
}) => {
  if (blog.detail.startsWith("http")) {
    return (
      <Link href={blog.detail} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    );
  }
  return <>{children}</>;
};

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const imageUrl =
    blog.thumbnail_path ||
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group rounded-3xl overflow-hidden bg-dark-lighter border border-white/5 shadow-premium transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden border-b border-white/5">
        <Image
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          src={imageUrl}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <Badge color="blue">{blog.post_category.title}</Badge>
        </div>
        <h4 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
          <BlogDetailLink blog={blog}>{blog.title}</BlogDetailLink>
        </h4>
        <div className="mt-auto pt-4 border-t border-white/5">
          <BlogDetailLink blog={blog}>
            <span className="text-slate-400 hover:text-white text-sm font-semibold flex items-center gap-2 transition-colors group/link">
              Read Full Article
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </span>
          </BlogDetailLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
