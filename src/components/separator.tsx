import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "~/components/ui/separator";

interface SeparatorProps {
  title: string;
  link?: string;
  linkText?: string;
}

export default function SectionSeparator(props: SeparatorProps) {
  return (
    <div className="flex items-center gap-3 py-1 text-muted-foreground">
      <Separator className="flex-1 bg-border/60" />
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
          {props.title}
        </span>
        {props.link ? (
          <Link
            href={props.link}
            data-sln-event={`user: Section visited: ${props.title}`}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[11px] font-medium transition-colors hover:bg-muted hover:text-foreground"
          >
            <span>{props.linkText || "View all"}</span>
            <ArrowUpRight size={12} aria-hidden />
          </Link>
        ) : null}
      </div>
      <Separator className="w-8 bg-border/60" />
    </div>
  );
}
