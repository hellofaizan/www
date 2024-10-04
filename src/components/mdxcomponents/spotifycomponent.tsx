"use client";

import React, { Suspense } from "react";
import { Loader, Music } from "lucide-react";
import Image from "next/image";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import PlaySong from "../Play";
import Link from "next/link";

export default function spotifycomponent({
  data,
  url,
}: {
  data: any;
  url: string;
}) {
  const allData = data?.props;
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="relative flex items-center overflow-hidden rounded-lg border p-2 h-28">
        <Link className="flex items-center overflow-hidden" href={url} target="_blank">
          <div className="items-cente justify-centerr relative flex flex-none">
            <Image
              src={allData?.cover_image}
              width={500}
              height={500}
              alt="Youtube Video"
              className="h-16 w-16 rounded-md"
            />
            <IconPlayerPlayFilled
              size={17}
              className="absolute left-[50%] top-[50%] z-10 -ml-2 -mt-2 items-center justify-start rounded-full border border-white p-1 text-white shadow-2xl drop-shadow-2xl"
            />
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="flex flex-grow items-center pl-3 font-semibold md:text-xl">
              <Music size={18} className="mr-2 flex-none" />{" "}
              <span className="longtext max-w-max flex-1 overflow-x-scroll truncate whitespace-nowrap">
                {allData?.title}
              </span>
            </span>

            <span className="pl-3 text-xs font-semibold">
              {allData?.artist}
            </span>
          </div>
        </Link>
        <PlaySong url={allData?.preview_url} />
      </div>
    </Suspense>
  );
}
