import { Twitter, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

export default function Connect() {
  return (
    <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
      <div className="bg-muted px-4 rounded-full flex  items-center gap-2 w-max py-[2px]">
        <span className="animate-pulse">~</span>
        open for work
      </div>

      <div className="flex items-center gap-1 justify-end">
        <Link href="https://twitter.com/hellofaizaan" target="_blank">
          <Button variant={"default"} className="rounded-full border border-muted px-6 bg-[#070707] text-white hover:bg-[#0f0f0f] flex items-center gap-1">
            <Twitter size={16} />
            Connect
          </Button>
        </Link>
        <Button variant={"default"} className="rounded-full border border-muted px-6 bg-[#345FCD] text-white hover:bg-[#2760f0] flex items-center gap-1">
          <User size={16} />
          Resume
        </Button>
      </div>
    </div>
  );
}
