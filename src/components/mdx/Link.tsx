import React from "react";
import Link from "next/link";
export default function LinkTag({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="font-medium underline underline-offset-4 text-blue-500"
    >
      {children}
    </Link>
  );
}
