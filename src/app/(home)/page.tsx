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

export default function Home() {
  const basicInfo = 
  "Self-taught software engineer from Kashmir, India, passionate about crafting exceptional web and Android experiences. I specialize in full-stack development with a focus on intuitive UX and robust backend architecture.";

const aboutMe1 = 
  "👋 Fresh high school graduate diving deep into front-end web and Android development. Currently focused on expanding my technical expertise and preparing to explore DSA and competitive programming.";

const aboutMe2 = 
  "Let's connect! Reach out via [email ![Email](/companylogo/iemail.svg)](mailto:faizan@mohammadfaizan.in) or [twitter/X ![Twitter](/companylogo/twitter.svg)](https://x.com/hellofaizaan) to discuss tech, collaborate on projects, or just have an engaging conversation.";

const info = `
  - Mohammad Faizan
  - Kashmir, India 🇮🇳
  - Self-taught Developer • Full-stack Enthusiast
  - Tech stack: Web Development, Android, IoT
  - [Book a chat ![Cal](/companylogo/calcom.svg)](https://cal.com/hellofaizan/personalmeet)`;

  const featNotes = sortPostsByDate(notes.filter((post) => post.featured));

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Profile />
      <AboutMe text={basicInfo} />
      <Connect />

      <SectionSeparator title="ABOUT ME" />

      <div className="flex flex-col gap-3">
        <AboutMe text={aboutMe1} />
        <AboutMe text={aboutMe2} />
        <AboutMe text={info} />
      </div>

      <MainSkills />

      <SectionSeparator title="PROJECTS" /> {/* link="/projects" */}
      <Pinnedprojects />

      {featNotes.length > 0 && (
        <>
          <SectionSeparator title="NOTES" link="/notes" />
          <FeatNotes />
        </>
      )}

      <SectionSeparator title="FIND ME AROUND GLOBE" />
      <Socials />
    </div>
  );
}
