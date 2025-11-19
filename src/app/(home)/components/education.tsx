import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Education() {
  const educationData = [
    {
      institution: "NIT Srinagar",
      degree: "Civil Department",
      link: "https://nitsri.ac.in",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/National_Institute_of_Technology%2C_Srinagar_Logo.png/500px-National_Institute_of_Technology%2C_Srinagar_Logo.png",
      startDate: "2025",
      endDate: "2029",
      description: "Bachelor of Technology",
    },
  ];

  return (
    <div className="w-full">
      {educationData.map((edu, index) => (
        <div className="flex flex-col items-start px-2 gap-[2px]" key={index}>
          <div className="flex items-center gap-3">
            <Link
              href={edu.link}
              target="_blank"
              data-sln-event="user: Education visited"
            >
              <Image
                src={edu.logo}
                alt={edu.institution}
                width={58}
                height={58}
                className="w-[54px] h-[54px] md:w-[58px] md:h-[58px] rounded-sm object-contain bg-white p-1"
              />
            </Link>
            <div className="flex flex-col">
              <p className="font-bold">{edu.institution}</p>
              <p className="text-xs md:text-base font-medium text-muted-foreground">
                <Link
                  href={edu.link}
                  className="hover:text-blue-500 hover:underline"
                  target="_blank"
                  data-sln-event="user: Education visited"
                >
                  {edu.degree}
                </Link>
              </p>
              <p className="text-sm text-muted-foreground">{`${edu.startDate} - ${edu.endDate}`}</p>
            </div>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            <GraduationCap size={15} /> {edu.description}
          </div>
        </div>
      ))}
    </div>
  );
}
