import Image from "next/image";
import AboutMe from "~/app/(home)/components/aboutme";
import Connect from "~/app/(home)/components/connect";
import Profile from "~/app/(home)/components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <Profile />
      <AboutMe />
      <Connect />
    </div>
  );
}
