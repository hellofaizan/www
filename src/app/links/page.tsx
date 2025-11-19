import { TriangleAlert } from "lucide-react";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Mohammad Faizan",
  description: "Browse important links and resources from Mohammad Faizan.",
  openGraph: {
    title: "Links | Mohammad Faizan",
    description: "Browse important links and resources from Mohammad Faizan.",
    url: "https://mohammadfaizan.com/links",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://mohammadfaizan.com/links",
  },
};

export default function page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <TriangleAlert className="text-yellow-400" size={24}/>
        Links – Mohammad Faizan
      </h1>
      <p className="mb-4 text-lg">Browse <strong>Mohammad Faizan links</strong> to my developer profiles, social media, and resources. Find all important <strong>developer links</strong> and ways to connect with me online.</p>
      <h2 className="text-2xl font-semibold mb-2">All Links</h2>
      <div className="text-lg flex items-center gap-2">
        Working on it...
      </div>
    </main>
  );
}
