import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const navLinks = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/notes",
    name: "Blog",
  },
  {
    link: "/stats",
    name: "Stats",
  },
  {
    link: "/projects",
    name: "Projects",
  },
  {
    link: "/links",
    name: "Links",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hellofaizaan/",
  },
  {
    name: "GitHub",
    link: "https://github.com/hellofaizan",
  },
  {
    name: "Peerlist",
    link: "https://peerlist.io/hellofaizan",
  },
  {
    name: "X/Twitter",
    link: "https://x.com/mofaizandev",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/hellofaizaan",
  },
];

const resourceLinks = [
  {
    link: "/",
    name: "Snippet",
  },
  {
    link: "/",
    name: "Tweet",
  },
  {
    link: "/",
    name: "Resouces",
  },
  {
    link: "/",
    name: "Live Demo",
  },
  {
    link: "/",
    name: "Inspiration",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Navigation Links */}
          <div className="space-y-3">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-600 transition-colors"
                    data-sln-event={`footer: ${link.name} visited`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3 hidden md:flex">
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    target="_blank"
                    className="text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-600 transition-colors"
                    data-sln-event={`footer: ${link.name} visited`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-600 transition-colors"
                    data-sln-event={`footer: ${link.name} visited`}
                   >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Find me text */}
        <div className="mt-6 flex items-center justify-start space-x-2 text-neutral-500">
          <span>Find me on</span>
          <a
            href="https://x.com/mofaizandev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            data-sln-event={`footer: Twitter visited`}
          >
            <IconBrandX className="hover:scale-105 cursor-pointer hover:text-black dark:hover:text-white" />
            <span className="sr-only">X (formerly Twitter)</span>
          </a>
          <span>and</span>
          <a
            href="https://peerlist.io/hellofaizan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Peerlist"
            data-sln-event={`footer: Peerlist visited`}
          >
            <img
              className="ml-1 h-[22px] w-[22px] hover:scale-105 grayscale hover:grayscale-0 cursor-pointer"
              src="/companylogo/peerlistlogo.svg"
              alt=""
            />
            <span className="sr-only">Peerlist</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
