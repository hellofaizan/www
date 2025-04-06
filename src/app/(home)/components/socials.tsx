import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Globe2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Separator } from "~/components/ui/separator";

export default function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hellofaizaan/",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/hellofaizan",
      icon: "github",
    },
    {
      name: "Peerlist",
      link: "https://peerlist.io/hellofaizaan",
      icon: "peerlist",
    },
    {
      name: "X/Twitter",
      link: "https://x.com/hellofaizaan",
      icon: "x",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hellofaizaan",
      icon: "instagram",
    },
  ];

  const socialIcons = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <IconBrandLinkedin className="hover:scale-105" />;
      case "github":
        return <IconBrandGithub className="hover:scale-105" />;
      case "x":
        return <IconBrandX className="hover:scale-105" />;
      case "instagram":
        return <IconBrandInstagram className="hover:scale-105" />;
      case "facebook":
        return <IconBrandFacebook className="hover:scale-105" />;
      case "peerlist":
        return (
          <img
            className="ml-1 h-[20px] w-[20px] hover:scale-105 grayscale hover:grayscale-0"
            src="/companylogo/peerlistlogo.svg"
            alt="peerlist"
          />
        );
      default:
        return <Globe2 />;
    }
  };

  return (
    <div className="flex col-span-3 flex-col gap-2">
      {socials.map((social) => (
        <Link
          className="flex items-baseline gap-2 text-muted-foreground hover:dark:text-[rgb(192,192,192)] hover:text-muted-foreground text-[#2f2f2f] dark:text-muted-foreground"
          href={social.link}
          target="_blank"
          key={social.name}
        >
          <span className="text-lg font-medium">{social.name}</span>
          <Separator className="flex-1" />
          {socialIcons(social.icon)}
        </Link>
      ))}
    </div>
  );
}
