import { cn } from "~/lib/utils";
import { parseHighlightedText } from "~/lib/highlight-text";

interface PortfolioHighlightsProps {
  items: string[];
  className?: string;
}

export function PortfolioHighlights({
  items,
  className,
}: PortfolioHighlightsProps) {
  if (items.length === 0) return null;

  return (
    <ul
      className={cn(
        "list-disc pl-5 space-y-1.5 text-xs md:text-sm text-muted-foreground",
        className
      )}
    >
      {items.map((item, index) => (
        <li key={index}>{parseHighlightedText(item)}</li>
      ))}
    </ul>
  );
}
