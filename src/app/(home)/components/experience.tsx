import { GemIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Experience() {
  const experienceData = [
    {
      jobTitle: "Full Stack Developer",
      company: "Crito Design",
      type: "Remote",
      link: "https://crito.design",
      logo: "/companylogo/crito.jpg",
      startDate: "Oct 2024",
      endDate: "Jun 2025 - 9 mos",
      location: "",
      skills: "Next JS, Prisma ORM, AWS Lambda, Ffmpeg, PostgreSQL",
    },
  ];

  return (
    <div className="w-full">
      {experienceData.map((company, index) => (
        <div className="flex flex-col items-start px-2 gap-[2px]" key={index}>
          <div className="flex items-center gap-3">
            <Link
              href={company.link}
              target="_blank"
              data-sln-event="user: Company visited"
            >
              <Image
                src={company.logo}
                alt={company.company}
                width={58}
                height={58}
                className="w-[58px] h-[58px] rounded-sm"
              />
            </Link>
            <div className="flex flex-col">
              <p className="font-bold">{company.jobTitle}</p>
              <p className="text-base font-medium text-muted-foreground">
                <Link
                  href={company.link}
                  className="hover:text-blue-500 hover:underline"
                  target="_blank"
                  data-sln-event="user: Company visited"
                >
                  {company.company}
                </Link>{" "}
                • <span className="text-sm">{company.type}</span>
              </p>
              <p className="text-sm text-muted-foreground">{`${company.startDate} - ${company.endDate}`}</p>
            </div>
          </div>
          <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
            <GemIcon size={15} /> {company.skills}
          </div>
        </div>
      ))}
    </div>
  );
}
