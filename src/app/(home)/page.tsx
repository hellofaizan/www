import AboutMe from "~/app/(home)/components/aboutme";
import Connect from "~/app/(home)/components/connect";
import Profile from "~/app/(home)/components/Profile";
import SectionSeparator from "~/components/separator";
import MainSkills from "./components/mainskills";
import Pinnedprojects from "./components/pinnedprojects";
import Socials from "./components/socials";
import FeatNotes from "./components/FeatNotes";

export default function Home() {
  const basicInfo =
    "I'm a self-taught software engineer from the Kashmir, India. I'm currently pursuing full-stack web development and Android Development to create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend.";

  const aboutMe1 =
    "👋 Hello, I'm a front-end web and android developer and recently graduated from high school, This year my primary focus is gonna be improve my coding skills and sooner or later i will start DSA journey and get into competitive programming.";

  const aboutMe2 =
    "However, I remain excited to expanding my network. Feel free to reach out via [email ![Email](/companylogo/iemail.svg)](mailto:faizancurious@gmail.com) or [twitter/X ![Twitter](/companylogo/twitter.svg)](https://x.com/hellofaizaan) or schedule a meet on [cal.com ![Cal](/companylogo/calcom.svg)](https://cal.com/hellofaizan/personalmeet) if you would like to connect or simply have a friendly chat.";

  const aboutMe3 =
    "I'm very curious about AI, open source, internet startups, SaaS, developer tools and beautiful UX! Drop me a msg via my [discord server ![discord](/companylogo/discord.svg)](https://discord.gg/vUHMxPvege) if you'd like to hear my thoughts on what you're working on.";

  const info = ` - Jammu and kashmir, India 🇮🇳
  - Birthday: 13 Sep, 07 • 7teeeeeeen (17)
  - I also enjoy Chess, Football, IoT and travelling
  - Have an idea? Let's [discuss ![Cal](/companylogo/calcom.svg)](https://cal.com/hellofaizan/personalmeet)`;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Profile />
      <AboutMe text={basicInfo} />
      <Connect />

      <SectionSeparator title="ABOUT ME" />

      <div className="flex flex-col gap-3">
        <AboutMe text={aboutMe1} />
        <AboutMe text={aboutMe2} />
        <AboutMe text={aboutMe3} />
        <AboutMe text={info} />
      </div>

      <MainSkills />

      <SectionSeparator title="PROJECTS" link="/projects" />
      <Pinnedprojects />

      <SectionSeparator title="NOTES" link="/notes" />
      <FeatNotes />

      <SectionSeparator title="FIND ME AROUND GLOBE" />
      <Socials />
    </div>
  );
}
