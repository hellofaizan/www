"use client";

import {
  ChevronDown,
  Coffee,
  Home,
  Menu,
  QrCode,
  QrCodeIcon,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const navItems = {
  "/": {
    name: "about",
  },
  "/notes": {
    name: "notes",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <nav className="flex flex-row md:mb-16 mb-8">
      <div className="flex items-center justify-between text-lg w-full md:border md:border-[#838383]/45 md:rounded-2xl md:p-2 py-2 md:backdrop-blur-3xl backdrop-blur-lg">
        <div className="flex flex-row items-center flex-1 gap-4 md:pl-2">
          <Image src="/faizan.png" width={40} height={40} alt="Hellofaizan" />
          <div className="hidden md:flex items-center">
            <p className="flex items-center gap-[2px] cursor-pointer hover:text-neutral-200 hover:bg-gray-500/10 text-[#C0C0C0] rounded-md align-middle px-2 py-[6px]">
              <Home size={17} />
            </p>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <div className="flex flex-row items-center ">
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-200 hover:bg-gray-500/10 text-[#C0C0C0] rounded-md flex align-middle px-2"
                  >
                    {name}
                  </Link>
                </div>
              );
            })}
            <p className="group flex items-center gap-[2px] cursor-pointer hover:text-neutral-200 hover:bg-gray-500/10 text-[#C0C0C0] rounded-md align-middle px-2">
              more
              <ChevronDown size={17} className="group-hover:rotate-180" />
            </p>
          </div>
        </div>

        <div>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="flex-row items-center flex hover:bg-gray-500/10 text-[#C0C0C0]"
          >
            <Menu className="rounded" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
