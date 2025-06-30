"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "~/components/ui/button";
import { notes } from "#site/content";
import React from "react";
import { sortPostsByDate } from "~/lib/posts";
import PostList from "../components/postlist";
import { useRouter } from "next/navigation";

export default function NotesListClient() {
  const displayPosts = sortPostsByDate(notes.filter((post) => post.published));
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl font-bold">Notes</h1>
      <Separator className="my-4" />
      <div>
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
              <h1 className="text-3xl font-bold text-muted-foreground">
                No Post Found
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 