import { Separator } from "@radix-ui/react-dropdown-menu";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getPosts } from "~/lib/mdx";

export default function page() {
  const posts = getPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold">Notes</h1>
      <Separator className="my-4" />
      <div>
        {posts.map((post) => (
          <Link href={`/notes/${post.slug}`} key={post.slug} className="flex items-center justify-between gap-2">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <div className="flex gap-4 items-center">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </p>

              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar size={14} />
                <span>
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
