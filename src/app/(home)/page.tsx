import AboutMe from "~/app/(home)/components/aboutme";
import Connect from "~/app/(home)/components/connect";
import Profile from "~/app/(home)/components/Profile";
import SectionSeparator from "~/components/separator";
import MainSkills from "./components/mainskills";
import Pinnedprojects from "./components/pinnedprojects";
import Socials from "./components/socials";
import FeatNotes from "./components/FeatNotes";
import { sortPostsByDate } from "~/lib/posts";
import { notes } from "#site/content";
import Experience from "./components/experience";
import Education from "./components/education";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Faizan | Portfolio, Projects, Notes, and More",
  description: "Welcome to Mohammad Faizan's portfolio. Explore projects, notes, experience, and ways to connect. Web developer, designer, and creator.",
  openGraph: {
    title: "Mohammad Faizan | Portfolio, Projects, Notes, and More",
    description: "Welcome to Mohammad Faizan's portfolio. Explore projects, notes, experience, and ways to connect. Web developer, designer, and creator.",
    url: "https://mohammadfaizan.com/",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Faizan | Portfolio, Projects, Notes, and More",
    description: "Welcome to Mohammad Faizan's portfolio. Explore projects, notes, experience, and ways to connect. Web developer, designer, and creator.",
  },
  alternates: {
    canonical: "https://mohammadfaizan.com/",
  },
};

export default function Home() {
  const basicInfo =
    "Full-stack developer building production SaaS, AI systems, and cross-platform apps. I work across Next.js, TypeScript, PostgreSQL, Android, and applied AI—from link-in-bio platforms to multi-tenant decision engines and desktop tooling.";

  const aboutMe1 =
    "Most of my work sits at the intersection of full-stack web development, AI/ML, and systems that ship to real users. I care about auth flows, scalable data models, retrieval pipelines, and polished product experiences.";

  const aboutMe2 =
    "Outside shipped products, I explore embedded systems, computer vision, and hardware—always learning how software can model and improve real-world systems.";

  const featNotes = sortPostsByDate(notes.filter((post) => post.featured));

  return (
    <main className="flex flex-col gap-8 md:gap-10">
      <Profile />
      <AboutMe text={basicInfo} />
      <Connect />
      <SectionSeparator title="ABOUT ME" />
      <section>
        <div className="flex flex-col gap-3">
          <AboutMe text={aboutMe1} />
          <AboutMe text={aboutMe2} />
        </div>
      </section>
      <MainSkills />
      <SectionSeparator title="EDUCATION" />
      <section>
        <Education />
      </section>
      <SectionSeparator title="EXPERIENCE" />
      <section>
        <Experience />
      </section>
      <SectionSeparator title="PROJECTS" link="/projects" />
      <section>
        <Pinnedprojects />
      </section>
      {featNotes.length > 0 && (
        <>
          <SectionSeparator title="NOTES" link="/notes" />
          <section>
            <FeatNotes />
          </section>
        </>
      )}
      <SectionSeparator title="FIND ME AROUND GLOBE" />
      <section>
        <Socials />
      </section>
    </main>
  );
}
