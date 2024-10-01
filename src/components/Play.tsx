"use client";

import { Loader, Play, Pause } from "lucide-react";
import React, { useState, useRef } from "react";

export default function PlaySong({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const audioPlayer = useRef<any>(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer?.current.play();
    } else {
      audioPlayer?.current.pause();
    }

    audioPlayer?.current.addEventListener("ended", () => {
      setIsPlaying(false);
    });
  };

  return (
    <button
      className="absolute bottom-0 right-0 z-20 mb-[8px] mr-1 md:mr-4 flex cursor-pointer items-center gap-1 rounded-full border border-green-500/60 bg-green-500/15 p-[1px] px-3 text-sm"
      onClick={togglePlayPause}
    >
      <audio ref={audioPlayer} src={url} preload="metadata"></audio>
      {isLoading ? (
        <Loader className="animate-spin" size={15} />
      ) : isPlaying ? (
        <Pause size={15} />
      ) : (
        <Play size={15} />
      )}
      preview
    </button>
  );
}

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full rounded-lg border border-gray-300">
      <div
        className="h-4 rounded-lg bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
