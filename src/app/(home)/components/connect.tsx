import { IconBrandX } from "@tabler/icons-react";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function Connect() {
  return (
    <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
      <div className="dark:bg-muted bg-muted-foreground/10 px-4 rounded-full flex  items-center gap-2 w-max py-[2px]">
        <span className="animate-pulse">~</span>
        Open for work
      </div>

      <div className="flex items-center gap-1 justify-end">
        <Link href="https://twitter.com/mofaizandev" target="_blank">
          <Button
            data-sln-event="user: Twitter button clicked"
            variant={"default"}
            className="rounded-full border border-muted px-6 bg-[#070707] text-white hover:bg-[#0f0f0f] flex items-center gap-1"
          >
            <IconBrandX size={16} />
            Connect
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/hellofaizaan/" target="_blank">
          <Button
            data-sln-event="user: LinkedIn button clicked"
            variant={"default"}
            className="rounded-full border border-muted px-6 bg-[#345FCD] text-white hover:bg-[#2760f0] flex items-center gap-1"
          >
            <User size={16} />
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
