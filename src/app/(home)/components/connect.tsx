import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { FileIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Connect() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open for collaboration
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline" className="rounded-full gap-2">
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-sln-event="user: Resume button clicked"
          >
            <FileIcon size={16} aria-hidden />
            Resume
          </Link>
        </Button>
        <Button asChild size="sm" className="rounded-full gap-2">
          <Link
            href="https://www.linkedin.com/in/hellofaizaan/"
            target="_blank"
            rel="noopener noreferrer"
            data-sln-event="user: LinkedIn button clicked"
          >
            <IconBrandLinkedin size={16} aria-hidden />
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
  );
}
