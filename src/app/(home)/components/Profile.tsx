import Image from "next/image";
import React from "react";
import Online from "../../../components/online";

export default function Profile() {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="relative">
        <Image
          src="/hellofaizan.png"
          width={100}
          height={100}
          alt="Hellofaizan"
          className="w-[55px] h-[55px] md:w-20 md:h-20 rounded-full"
        />
        <Online />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl md:text-6xl font-istok font-bold">
          It&apos;s me, Faizan
        </h1>
        <p className="md:text-lg font-light dark:text-[#C0C0C0]">A full stack web and android developer</p>
      </div>
    </div>
  );
}
