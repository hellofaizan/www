"use client";

import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const navItems = {
  "/projects": { name: "Projects" },
  "/notes": { name: "Notes" },
};

const moreLinks = [
  { href: "/resume", label: "Resume" },
  { href: "/links", label: "Links" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/stats", label: "Stats" },
];

const linkClass =
  "rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

export function Navbar() {
  const pathname = usePathname();
  const isResume = pathname === "/resume";

  const isActive = (path: string) => {
    if (path === "/notes") {
      return pathname === path || pathname.startsWith("/notes/");
    }
    return pathname === path;
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
        isResume
          ? "mb-0 shrink-0 md:border-b"
          : "mb-12 md:top-3 md:mb-14 md:border-none"
      )}
    >
      <div className="flex w-full items-center justify-between px-5 py-3 md:rounded-xl md:border md:border-border/80 md:bg-card/40 md:px-4 md:py-2 md:shadow-sm md:backdrop-blur-xl">
        <div className="flex flex-1 items-center gap-3 md:pl-1">
          <Link href="/" aria-label="Home" className="shrink-0">
            <Image
              src="/faizan.png"
              width={36}
              height={36}
              alt=""
              className="rounded-full ring-2 ring-border/60"
            />
          </Link>
          <div className="hidden items-center gap-0.5 md:flex">
            <Link
              href="/"
              className={cn(
                linkClass,
                "inline-flex items-center gap-1.5",
                pathname === "/" && "bg-muted text-foreground"
              )}
            >
              <Home size={16} aria-hidden />
              Home
            </Link>
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={cn(linkClass, isActive(path) && "bg-muted text-foreground")}
              >
                {name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  linkClass,
                  "inline-flex items-center gap-1 outline-none data-[state=open]:bg-muted data-[state=open]:text-foreground"
                )}
              >
                More
                <ChevronDown size={16} className="opacity-70" aria-hidden />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[10rem]">
                {moreLinks.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild>
                    <Link
                      href={href}
                      className={cn(
                        "w-full cursor-pointer",
                        pathname === href && "font-medium text-foreground"
                      )}
                    >
                      {label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <ModeToggle className="rounded-lg border-none hover:bg-muted" />
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </nav>
  );
}
