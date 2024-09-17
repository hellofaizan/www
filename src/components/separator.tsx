import { ExternalLink, MoveUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";

interface SeparatorProps {
  title: string;
  link?: string;
}

export default function SectionSeparator(props: SeparatorProps) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <Separator
        className={cn(props.link ? "w-[55%] md:w-[75%]" : "w-[70%] md:w-[80%]")}
      />
      <div className="flex gap-1 items-center">
        <p className="text-xs">{props.title}</p>
        {props.link && (
          <Link
            href={props.link}
            className="border rounded-lg px-3 flex items-center gap-1"
          >
            more
            <ExternalLink size={12} />
          </Link>
        )}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Separator className="flex-1" />
        <span className="w-1 h-1 bg-muted rotate-45 -ml-1" />
      </div>
    </div>
  );
}
