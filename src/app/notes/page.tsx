import Link from "next/link";
import React from "react";
import { getPublishedPosts } from "~/lib/mdx";

export default function page() {
  //   const featuredPosts = getFeaturedPosts();
  const allPosts = getPublishedPosts();
  return (
    <div>
      {allPosts.map((post) => (
        <Link href={`/notes/${post.slug}`} key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
