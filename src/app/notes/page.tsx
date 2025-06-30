import { Metadata } from "next";
import Head from "next/head";
import NotesListClient from "./components/NotesListClient";

export const metadata: Metadata = {
  title: "Notes | Mohammad Faizan",
  description: "Read Faizan's notes on web development, technology, and more.",
  openGraph: {
    title: "Notes | Mohammad Faizan",
    description: "Read Mohammad Faizan's notes on web development, technology, and more.",
    url: "https://mohammadfaizan.in/notes",
    siteName: "Mohammad Faizan Portfolio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes | Mohammad Faizan",
    description: "Read Mohammad Faizan's notes on web development, technology, and more.",
  },
  alternates: {
    canonical: "https://mohammadfaizan.in/notes",
  },
};

export default function NotesPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Notes | Faizan",
              "description": "Read Faizan's notes on web development, technology, and more.",
              "url": "https://mohammadfaizan.in/notes"
            })
          }}
        />
      </Head>
      <NotesListClient />
    </>
  );
}
