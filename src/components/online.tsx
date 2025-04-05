"use client";

import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Online = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get("https://api.lanyard.rest/v1/users/890232380265222215")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const online =
    data?.data?.active_on_discord_desktop === true ||
    data?.data?.active_on_discord_mobile === true;

  const listeningToSpotify = data?.data?.listening_to_spotify === true;
  const spotify = listeningToSpotify && data?.data?.spotify.song;

  const artist =
    listeningToSpotify &&
    data?.data?.spotify.artist.split(";")[0].trim().replace(/"/g, "");

  return (
    <Suspense fallback={<div></div>}>
      {online && (
        <span
          className="w-3 h-3"
          title={
            listeningToSpotify
              ? `${data?.data?.discord_status} | Listening to ${spotify} by ${artist}`
              : data?.data?.discord_status
          }
        >
          <span className="absolute bottom-1 right-1 md:right-[6px] md:bottom-[6px] bg-green-500 rounded-full h-2 md:h-3 w-2 md:w-3 dark:border-[#1d181f] animate-ping" />
          <span className="absolute bottom-1 right-1 md:right-[6px] md:bottom-[6px] bg-green-500 rounded-full h-2 md:h-3 w-2 md:w-3 dark:border-[#1d181f]" />
        </span>
      )}
    </Suspense>
  );
};

export default Online;
