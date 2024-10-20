import React from "react";
import Link from "next/link";
import { notes } from "#site/content";
import { sortPostsByDate } from "~/lib/posts";

export default function FeatNotes() {
  const featNotes = sortPostsByDate(notes.filter((post) => post.featured));

  return (
    <div>
      <div className="flex flex-col gap-2">
        {featNotes.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <h3 className="text-xl font-bold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
