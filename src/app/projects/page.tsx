import { TriangleAlert } from "lucide-react";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mohammad Faizan",
  description: "Explore Mohammad Faizan's web development, design, and open source projects.",
  openGraph: {
    title: "Projects | Mohammad Faizan",
    description: "Explore Mohammad Faizan's web development, design, and open source projects.",
    url: "https://mohammadfaizan.in/projects",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohammad Faizan",
    description: "Explore Mohammad Faizan's web development, design, and open source projects.",
  },
  alternates: {
    canonical: "https://mohammadfaizan.in/projects",
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
