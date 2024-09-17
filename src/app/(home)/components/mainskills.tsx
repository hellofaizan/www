import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainSkills() {
  const tech = [
    {
      logo: "/techlogos/typescript.svg",
      name: "TypeScript",
    },
    {
      logo: "/techlogos/kotlin.svg",
      name: "Kotlin",
    },
    {
      logo: "/techlogos/nextjs.svg",
      name: "Next JS",
    },
    {
      logo: "/techlogos/react.svg",
      name: "React",
    },
    {
      logo: "/techlogos/java.svg",
      name: "Java",
    },
    {
      logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
      name: "Python",
    },
    {
      logo: "/techlogos/android-icon.svg",
      name: "Android",
    },
    {
      logo: "/techlogos/raspberrypi.svg",
      name: "Rasberry Pi",
    },
    {
      logo: "/techlogos/postgresql.svg",
      name: "Postgres",
    },
    {
      logo: "/techlogos/blender.svg",
      name: "Blender",
    },
    {
      logo: "/techlogos/figma.svg",
      name: "Figma",
    },
  ];
  return (
    <div className="flex gap-2 flex-wrap">
      {tech.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-2 border p-1 px-3 rounded-md"
          >
            <Image
              src={item.logo}
              alt={item.name}
              className="w-5 h-5"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        );
      })}
      <Link href={"/about#skills"} className="flex items-center gap-2 border p-1 px-3 rounded-md animate-pulse hover:animate-none">
        <span className="text-sm font-medium">View More</span>
        <ExternalLink size={15} />
      </Link>
    </div>
  );
}
