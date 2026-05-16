import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioCard } from "~/components/portfolio-card";
import { PortfolioHighlights } from "~/components/portfolio-highlights";
import { Button } from "~/components/ui/button";

interface ProjectCardProps {
  title: string;
  description?: string;
  stack?: string;
  logo: string;
  link?: string;
  github?: string;
  status?: string;
  highlights?: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  const hasActions = Boolean(props.link || props.github);

  return (
    <PortfolioCard className="flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div
          className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-xl bg-muted/60 ring-1 ring-border/50"
          aria-hidden
        >
          <Image
            src={props.logo}
            alt=""
            className="h-11 w-11"
            height={44}
            width={44}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold tracking-tight md:text-xl">
              {props.title}
            </h3>
            {props.status ? (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                {props.status}
              </span>
            ) : null}
          </div>
          {props.description ? (
            <p className="mt-1 text-sm font-medium text-foreground/90">
              {props.description}
            </p>
          ) : null}
          {props.stack ? (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {props.stack}
            </p>
          ) : null}
        </div>
      </div>

      {hasActions ? (
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={`${props.title} project links`}
        >
          {props.link ? (
            <Button
              asChild
              size="default"
              className="min-h-10 flex-1 gap-2 rounded-lg sm:flex-none"
            >
              <Link
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${props.title} live site (opens in new tab)`}
                data-sln-event={`user: Project ${props.title} live visited`}
              >
                <ExternalLink size={16} aria-hidden />
                Live site
              </Link>
            </Button>
          ) : null}
          {props.github ? (
            <Button
              asChild
              variant="outline"
              size="default"
              className="min-h-10 flex-1 gap-2 rounded-lg sm:flex-none"
            >
              <Link
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${props.title} source code on GitHub (opens in new tab)`}
                data-sln-event={`user: Project ${props.title} github visited`}
              >
                <Github size={16} aria-hidden />
                GitHub
              </Link>
            </Button>
          ) : null}
        </div>
      ) : null}

      {props.highlights && props.highlights.length > 0 ? (
        <PortfolioHighlights items={props.highlights} />
      ) : null}
    </PortfolioCard>
  );
}
