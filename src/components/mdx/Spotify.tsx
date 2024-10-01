import React, { Suspense } from "react";
import { Loader } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import SpotifyComponent from "./spotifycomponent";

export default async function Spotify({ url }: { url: string }) {
  const data = await axios(
    `${process.env.NEXT_PUBLIC_Website_URL}/api/spotifydata?url=${encodeURIComponent(url)}`,
  ).then((res) => {
    if (res.status === 200) {
      return res.data;
    } else {
      return null;
    }
  });
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />{" "}
        </div>
      }
    >
      <div className="md:w-[50%] w-full">
        <SpotifyComponent data={data} url={url} />
      </div>
    </Suspense>
  );
}
