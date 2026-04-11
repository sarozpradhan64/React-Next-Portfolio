import React from "react";
import BlogCard from "@/components/cards/BlogCard";
import { BlogPost } from "@/types/blog";
import RevealOnScroll from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import ViewAllLink from "../elements/ViewAllLink";

interface LatestBlogsProps {
  blogs: BlogPost[];
}

const LatestBlogs: React.FC<LatestBlogsProps> = ({ blogs }) => {
  const latestBlogs = blogs.slice(0, 3);

  if (latestBlogs.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className=" mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <SectionTitle title={"Latest Blogs"} />
            <p className="text-slate-400 text-lg">
              Thoughts and insights on technology and design.
            </p>
          </div>

          {process.env.NEXT_PUBLIC_BLOG_API_URL && (
            <ViewAllLink
              href={process.env.NEXT_PUBLIC_BLOG_API_URL.split("/api")[0]}
              target="_blank"
            >
              View All Posts
            </ViewAllLink>
          )}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {latestBlogs.map((blog, index) => (
            <RevealOnScroll key={index} revealGroupName="home-blog-card">
              <BlogCard blog={blog} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
