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
    "A builder a developer focused on AI, machine learning, mathematics, physics, and engineering. I love working at the intersection of code and real-world systems - experimenting with algorithms, automation, robotics, and drone tech.";

  const aboutMe1 =
    "Most of my projects revolve around understanding how things work at a fundamental level, then using code to model, simulate, or improve them. I enjoy exploring applied math, physics driven systems, and the kind of engineering problems where software meets hardware.";

  const aboutMe2 =
    "When I’m not deep in code, I’m usually learning new concepts, building small hardware experiments, or testing ideas that push my understanding forward.";

  const featNotes = sortPostsByDate(notes.filter((post) => post.featured));

  return (
    <main className="flex flex-col gap-6 md:gap-7">
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
