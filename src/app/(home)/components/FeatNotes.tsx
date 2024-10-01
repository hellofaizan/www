import React from "react";
import { getFeaturedPosts } from "~/lib/mdx";
import AboutMe from "./aboutme";
import Link from "next/link";

export default function FeatNotes() {
  const posts = getFeaturedPosts();
  return (
    <div>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-2">
          {posts.map((post) => (
            <Link href={`/notes/${post.slug}`} key={post.slug}>
              <h3 className="text-xl font-bold">{post.title}</h3>
            </Link>
          ))}
        </div>
      ) : (
        <AboutMe text="Nothing here yet" />
      )}
    </div>
  );
}
