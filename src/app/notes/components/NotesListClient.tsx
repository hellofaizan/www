"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { notes } from "#site/content";
import React from "react";
import { sortPostsByDate } from "~/lib/posts";
import PostList from "../components/postlist";
import { useRouter } from "next/navigation";

export default function NotesListClient() {
  const displayPosts = sortPostsByDate(notes.filter((post) => post.published));
  const router = useRouter();
  return (
    <main>
      <Separator className="my-4" />
      <section>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {displayPosts.length > 0 ? (
            displayPosts.map((post) => (
              <div
                key={post.slug}
                className="flex w-full flex-col gap-2 rounded-lg border p-2 px-3 hover:border-foreground/20"
                onClick={() => router.push(`/${post.slug}`)}
              >
                <PostList
                  slug={post.slug}
                  title={post.title}
                  description={post.description || ""}
                  date={post.date}
                  author={post.Author}
                  authorUrl={post.AuthorUrl || ""}
                />
              </div>
            ))
          ) : (
            <div className="flex w-full items-center justify-center">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                No Post Found
              </h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 