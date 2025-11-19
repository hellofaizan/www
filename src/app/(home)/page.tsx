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
    "Self-taught software engineer from Kashmir, India, passionate about building seamless web and Android experiences with a focus on intuitive UX and scalable backend systems.";

  const aboutMe1 =
    "Just a college kid diving into front-end web and Android development. Currently focused on sharpening my skills and gearing up for DSA and competitive programming.";

  const aboutMe2 =
    "Let's connect! Reach out via [email ![Email](/companylogo/iemail.svg)](mailto:faizan@mohammadfaizan.com) or [twitter/X ![Twitter](/companylogo/twitter.svg)](https://x.com/curiousfaizaan) to discuss tech, collaborate on projects, or just have an engaging conversation.";

  const info = `
  - Mohammad Faizan
  - [Book a chat ![Cal](/companylogo/calcom.svg)](https://cal.com/hellofaizan/personalmeet)`;

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
          <AboutMe text={info} />
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
