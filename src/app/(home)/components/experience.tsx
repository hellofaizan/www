import { GemIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioCard } from "~/components/portfolio-card";
import { PortfolioHighlights } from "~/components/portfolio-highlights";
import { experienceData } from "~/data/portfolio";

export default function Experience() {
  return (
    <div className="flex w-full flex-col gap-4">
      {experienceData.map((company, index) => (
        <PortfolioCard key={index} className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <Link
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg ring-1 ring-border/60 transition-opacity hover:opacity-80"
              data-sln-event="user: Company visited"
            >
              <Image
                src={company.logo}
                alt={company.company}
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-cover"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-tight">{company.jobTitle}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                <Link
                  href={company.link}
                  className="font-medium text-foreground/90 hover:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-sln-event="user: Company visited"
                >
                  {company.company}
                </Link>
                <span className="mx-1.5 text-border">·</span>
                {company.type}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {company.startDate} – {company.endDate}
              </p>
            </div>
          </div>
          {company.location ? (
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground md:text-sm">
              <MapPin size={14} className="shrink-0" aria-hidden />
              {company.location}
            </p>
          ) : null}
          {company.skills ? (
            <p className="flex items-start gap-1.5 text-xs text-muted-foreground md:text-sm">
              <GemIcon size={14} className="mt-0.5 shrink-0" aria-hidden />
              <span>{company.skills}</span>
            </p>
          ) : null}
          <PortfolioHighlights items={company.highlights} />
        </PortfolioCard>
      ))}
    </div>
  );
}
