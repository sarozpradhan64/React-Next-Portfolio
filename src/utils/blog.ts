import { BlogPost } from "@/types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
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
