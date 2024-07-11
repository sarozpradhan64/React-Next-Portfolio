import Image from "next/image";
import FrontendLayout from "@/components/Layouts/FrontendLayout";
import RevealOnScroll from "@/components/Reveal";
import CardSkeleton from "@/components/skeleton/CardSkeleton";

async function getPosts() {
  const response = await fetch(
    "https://system.pradhansaroj.com.np/api/srz-portfolio-post-list",
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

function BlogPost({ post }) {
  return (
    <RevealOnScroll className="md:mb-0 mb-8" revealGroupName="blog-card">
      <div className="rounded relative" style={{ minHeight: "200px" }}>
        <a
          href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="object-cover"
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </a>
      </div>
      <div className="mt-3 px-3">
        <a
          href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
          target="_blank"
          rel="noreferrer"
        >
          <h5 className="text-white">{post.title}</h5>
        </a>
        <a
          href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
          target="_blank"
          rel="noreferrer"
          className="text-primary mt-2"
        >
          Read
        </a>
      </div>
    </RevealOnScroll>
  );
}

export default async function Page() {
  let posts;
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
    posts = null;
  }

  return (
    <FrontendLayout title="Blogs">
      {!posts ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-5">
          <CardSkeleton number={8} />
        </div>
      ) : posts.length >= 1 ? (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-5">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h3 className="text-white">No Blogs yet</h3>
      )}
    </FrontendLayout>
  );
}
