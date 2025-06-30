import { Metadata } from "next";
import AboutMe from "../(home)/components/aboutme";

export const metadata: Metadata = {
  title: "About | Mohammad Faizan - Web Developer, Not Cricketer",
  description: "Learn more about Mohammad Faizan, a web developer from Kashmir, India. Not the Pakistani cricketer.",
  openGraph: {
    title: "About | Mohammad Faizan - Web Developer, Not Cricketer",
    description: "Learn more about Mohammad Faizan, a web developer from Kashmir, India. Not the Pakistani cricketer.",
    url: "https://mohammadfaizan.in/about",
    siteName: "Mohammad Faizan Portfolio",
    type: "profile",
  },
  alternates: {
    canonical: "https://mohammadfaizan.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8">
      {/* <AboutMe /> */}
      <section className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">FAQ: Are you the cricketer Mohammad Faizan?</h2>
        <p className="mb-2">No, I am <strong>not</strong> the Pakistani cricketer Mohammad Faizan. I am a web developer and software engineer from Kashmir, India. If you are looking for the cricketer, you can find him on ESPNcricinfo or Wikipedia. If you are looking for a developer, you are in the right place!</p>
        <ul className="list-disc ml-6 text-sm">
          <li><strong>Profession:</strong> Web Developer, Software Engineer</li>
          <li><strong>Location:</strong> Kashmir, India</li>
          <li><strong>Notable for:</strong> Building web and Android apps, not playing cricket professionally</li>
        </ul>
      </section>
    </main>
  );
} 