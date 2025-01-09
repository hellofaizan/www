import Image from "next/image";
import React from "react";
import Online from "../../../components/online";

export default function Profile() {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="relative">
        <Image
          src="/hellofaizan.png"
          width={150}
          height={150}
          alt="Hellofaizan"
          className="w-[70px] h-[70px] md:w-32 md:h-32 rounded-full"
        />
        <Online />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-2xl md:text-5xl font-istok font-bold">
          Hello, I&apos;m Faizan
        </h1>
        <p className="md:text-lg font-light dark:text-[#C0C0C0]">Full stack web, android dev</p>
      </div>
    </div>
  );
}
