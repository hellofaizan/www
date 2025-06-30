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
    <main>
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <TriangleAlert className="text-yellow-400" size={24}/>
        Stats – Mohammad Faizan
      </h1>
      <p className="mb-4 text-lg">View <strong>Mohammad Faizan portfolio statistics</strong>, achievements, and milestones. Track the growth and impact of my work as a web developer and software engineer.</p>
      <h2 className="text-2xl font-semibold mb-2">Portfolio Statistics</h2>
      <div className="text-lg flex items-center gap-2">
        Working on it...
      </div>
    </main>
  );
}
