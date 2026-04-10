import FrontendLayout from "@/components/layouts/FrontendLayout";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blog";
import { Metadata } from "next";
import metas from "@/data/metaData";
import RevealOnScroll from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Blogs | ${metas.user.name}`,
  description: "Read my latest thoughts, tutorials, and insights on software development and technology.",
};

async function getBlogs(): Promise<BlogPost[]> {
  const apiUrl = process.env.NEXT_PUBLIC_BLOG_API_URL;
  if (!apiUrl) {
    console.warn("NEXT_PUBLIC_BLOG_API_URL is not defined");
    return [];
  }

  try {
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <FrontendLayout title="Blogs">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <RevealOnScroll
              key={index}
              revealGroupName="blog-card"
            >
              <BlogCard blog={blog} />
            </RevealOnScroll>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-dark-lighter/50 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">No Posts Yet</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              I haven&apos;t published any blog posts recently. Please check back later for updates on tech, coding, and design.
            </p>
          </div>
        )}
      </div>
    </FrontendLayout>
  );
}
