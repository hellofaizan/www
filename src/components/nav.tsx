"use client";

import { ChevronDown, Home, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const navItems = {
  "/projects": {
    name: "projects",
  },
  "/notes": {
    name: "notes",
  },
};

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/notes") {
      return pathname === path || pathname.startsWith("/notes/");
    }
    return pathname === path;
  };

  return (
    <nav className="flex flex-row md:mb-16 mb-14 border-b dark:border-[#838383]/25 border-[#606060]/45 md:border-none sticky top-0 md:top-2 z-50">
      <div className="flex md:px-3 items-center justify-between text-lg px-5 w-full md:border md:border-[#838383]/45 md:rounded-md md:p-2 py-2 md:backdrop-blur-3xl backdrop-blur-3xl">
        <div className="flex flex-row items-center flex-1 gap-4 md:pl-2">
          <Image src="/faizan.png" width={40} height={40} alt="Hellofaizan" />
          <div className="hidden md:flex items-center gap-1">
            <Link
              href={"/"}
              className={cn(
                "flex items-center gap-[2px] cursor-pointer hover:dark:text-neutral-200 hover:text-neutral-900 hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] rounded-md align-middle px-2 py-[6px]",
                pathname === "/" && "bg-gray-500/10 dark:text-white"
              )}
              aria-label="Home"
            >
              <Home size={17} />
              <span className="sr-only">Home</span>
            </Link>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <div className="flex flex-row items-center" key={name}>
                  <Link
                    key={path}
                    href={path}
                    className={cn(
                      "transition-all hover:dark:text-neutral-200 hover:text-neutral-900 hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] rounded-md flex align-middle px-2",
                      isActive(path) && "bg-gray-500/10 dark:text-white"
                    )}
                  >
                    {name}
                  </Link>
                </div>
              );
            })}
            <p className="group flex items-center gap-[2px] cursor-pointer hover:dark:text-neutral-200 hover:text-neutral-900 hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] rounded-md align-middle px-2">
              more
              <ChevronDown size={17} className="group-hover:rotate-180" />
            </p>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <ModeToggle className="border-none hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0]" />
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </nav>
  );
}
