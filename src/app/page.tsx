import Image from "next/image";
import AboutMe from "~/components/aboutme";
import Connect from "~/components/connect";
import { ModeToggle } from "~/components/ModeToggle";
import Profile from "~/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Profile />
      <AboutMe />
      <Connect />
    </div>
  );
}
