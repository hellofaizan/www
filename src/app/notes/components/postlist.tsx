"use client";
import { ArrowUpRight, Calendar, User2 } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface PostProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorUrl: string;
}

export default function PostList({
  slug,
  title,
  description,
  date,
  author,
  authorUrl,
}: PostProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer p-2"
    >
      <p className="text-xl font-bold">{title}</p>

      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-3 text-muted-foreground">
          <p className="flex items-center gap-1">
            <Calendar size={16} />
            <span className="">
              {new Date(date).toLocaleDateString("en-UK", {
                year: "2-digit",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>

          {authorUrl ? (
            <Link
              href={authorUrl}
              className="hover:text-blue-500"
              target="_blank"
            >
              <p className="group flex items-center gap-1">
                <User2 size={16} />
                <span>{author}</span>
                <ArrowUpRight size={16} className="hidden group-hover:block" />
              </p>
            </Link>
          ) : (
            <p className="flex items-center gap-1">
              <User2 size={16} />
              <span>{author}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
