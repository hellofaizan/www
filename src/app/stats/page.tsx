import { TriangleAlert } from "lucide-react";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats | Mohammad Faizan",
  description: "View Mohammad Faizan's portfolio statistics and achievements.",
  openGraph: {
    title: "Stats | Mohammad Faizan",
    description: "View Mohammad Faizan's portfolio statistics and achievements.",
    url: "https://mohammadfaizan.in/stats",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stats | Mohammad Faizan",
    description: "View Mohammad Faizan's portfolio statistics and achievements.",
  },
  alternates: {
    canonical: "https://mohammadfaizan.in/stats",
  },
};

export default function page() {
  return (
    <div>
      <h1 className="text-xl flex items-center gap-2">
        <TriangleAlert className="text-yellow-400" size={18}/>
        Working on it...
      </h1>
    </div>
  );
}
