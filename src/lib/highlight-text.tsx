import React from "react";

const BOLD_PATTERN = /\*\*([^*]+)\*\*/g;

export function parseHighlightedText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  const pattern = new RegExp(BOLD_PATTERN.source, "g");

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong
        key={key++}
        className="font-semibold text-foreground/90 dark:text-foreground"
      >
        {match[1]}
      </strong>
    );
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return parts.length > 0 ? parts : [text];
}
