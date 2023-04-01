import Image from "next/image";
import Link from "next/link";
import React from "react";
import SrzLayout from "../components/SrzLayout";
import data from "../src/data";
export default function blogs({ posts }) {
  // console.log(posts);
  return (
    <SrzLayout title="Blogs">
      <div className="row g-md-5" data-wow-delay="0.1s">
        {posts.length >= 1 ? (
          posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-md-0 mb-4">
              <div
                className="rounded position-relative"
                style={{ minHeight: "250px" }}
              >
                <a
                  href={`https://blazecodes.com/post/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {" "}
                  <Image
                    className="img-fluid object-cover"
                    src={`https://blazecodes.com${post.thumbnail}`}
                    alt={post.title}
                    fill
                  />
                </a>
              </div>
              <div className="mt-3">
                <span>{post.category.title}</span>
                <a
                  href={`https://blazecodes.com/post/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {" "}
                  <h5 className="text-white">{post.title}</h5>
                </a>
                <a
                  href={`https://blazecodes.com/post/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                  className="mt-2"
                >
                  Read
                </a>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-white">No Blogs yet</h3>
        )}
      </div>
    </SrzLayout>
  );
}

export async function getStaticProps() {
  let posts = [];
  try {
    var res = await fetch(`https://blazecodes.com/api/posts`);
    posts = await res.json();
  } catch (e) {
    posts = [
      {
        title: "Fetch Error",
        thumbnail: "/fail",
        category: { title: "fetch error" },
      },
    ];
  }

  return {
    props: {
      posts,
    },
    revalidate: 10, // Revalidate every 10 seconds with new data.
  };
}
