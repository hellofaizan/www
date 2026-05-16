import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface PortfolioCardProps {
  children: ReactNode;
  className?: string;
}

export function PortfolioCard({ children, className }: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/80 bg-card/50 p-4 md:p-5 shadow-sm transition-colors hover:border-border hover:bg-card/80 dark:bg-card/30 dark:hover:bg-card/50",
        className
      )}
    >
      {children}
    </div>
  );
}
