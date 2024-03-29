"use client";

import Image from "next/image";
import React from "react";
import SrzLayout from "@/components/SrzLayout";
import RevealOnScroll from "@/components/Reveal";
import useSWR from "swr";

export default function Page() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data:posts , isLoading, error } = useSWR("https://system.pradhansaroj.com.np/api/srz-portfolio-post-list", fetcher);
    // console.log(posts, isLoading, error)
  return (
    <SrzLayout title="Blogs">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-5">
        {posts && posts.length >= 1 ? (
          posts.map((post, index) => (
            <RevealOnScroll
              key={index}
              className="md:mb-0 mb-8"
              revealGroupName={"blog-card"}
            >
              <div
                className="rounded relative"
                style={{ minHeight: "200px" }}
              >
                <a
                  href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {" "}
                  <Image
                    className="object-cover"
                    src={`${post.thumbnail}`}
                    alt={post.title}
                    fill
                  />
                </a>
              </div>
              <div className="mt-3 px-3">
                {/* <span>{post.category.title}</span> */}
                <a
                  href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  {" "}
                  <h5 className="text-white">{post.title}</h5>
                </a>
                <a
                  href={`https://blazecodes.pradhansaroj.com.np/posts/${post.slug}`}
                  target="_blank"
                  rel={"noreferrer"}
                  className="mt-2"
                >
                  Read
                </a>
              </div>
            </RevealOnScroll>
          ))
        ) : (
          <h3 className="text-white">No Blogs yet</h3>
        )}
      </div>
    </SrzLayout>
  );
}


