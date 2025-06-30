import dynamic from "next/dynamic";
import { Metadata } from "next";

const EmailForm = dynamic(() => import("../../components/emailform"), { ssr: false });

export const metadata: Metadata = {
  title: "Contact | Mohammad Faizan",
  description: "Contact Mohammad Faizan via email form for inquiries, collaborations, or questions.",
  openGraph: {
    title: "Contact | Mohammad Faizan",
    description: "Contact Faizan via email form for inquiries, collaborations, or questions.",
    url: "https://mohammadfaizan.in/contact",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://mohammadfaizan.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-6">Feel free to reach out for collaborations, questions, or just to say hi!</p>
      <EmailForm />
    </main>
  );
} 