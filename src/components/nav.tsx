"use client";

import { ChevronDown, Home, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ModeToggle } from "./ModeToggle";

const navItems = {
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  "/notes": {
    name: "notes",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row md:mb-20 mb-14 px-3 md:px-0 border-b dark:border-[#838383]/25 border-[#606060]/45 md:border-none">
      <div className="flex items-center justify-between text-lg w-full md:border md:border-[#838383]/45 md:rounded-xl md:p-2 py-2 md:backdrop-blur-3xl backdrop-blur-lg">
        <div className="flex flex-row items-center flex-1 gap-4 md:pl-2">
          <Image src="/faizan.png" width={40} height={40} alt="Hellofaizan" />
          <div className="hidden md:flex items-center gap-1">
            <Link
              href={"/"}
              className={cn(
                "flex items-center gap-[2px] cursor-pointer hover:dark:text-neutral-200 hover:text-neutral-900 hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] rounded-md align-middle px-2 py-[6px]",
                pathname === "/" && "bg-gray-500/10 dark:text-white"
              )}
            >
              <Home size={17} />
            </Link>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <div className="flex flex-row items-center" key={name}>
                  <Link
                    key={path}
                    href={path}
                    className={cn(
                      "transition-all hover:dark:text-neutral-200 hover:text-neutral-900 hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] rounded-md flex align-middle px-2",
                      pathname === path && "bg-gray-500/10 dark:text-white"
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
          {/* <ModeToggle className="border-none hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0]" /> */}
          <Button
            variant={"ghost"}
            size={"icon"}
            className="flex-row items-center flex hover:dark:bg-gray-500/10 hover:bg-muted-foreground/15 text-[#2f2f2f] dark:text-[#C0C0C0] md:hidden"
          >
            <Menu className="rounded" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
