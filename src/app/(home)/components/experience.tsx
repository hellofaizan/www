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
      endDate: "Present",
      location: "",
      skills: "Next JS, React JS, Prisma ORM, AWS Lambda, Ffmpeg, PostgreSQL",
    },
  ];

  return (
    <div className="w-full">
      {experienceData.map((company, index) => (
        <div className="flex flex-col items-start px-2 gap-[2px]" key={index}>
          <Link
            href={company.link}
            target="_blank"
            className="flex items-center gap-3"
          >
            <Image
              src={company.logo}
              alt={company.company}
              width={58}
              height={58}
              className="w-[58px] h-[58px] rounded-sm"
            />
            <div className="flex flex-col">
              <p className="font-bold">{company.jobTitle}</p>
              <p className="text-base font-medium text-muted-foreground">
                <Link
                  href={company.link}
                  className="hover:text-blue-500 hover:underline"
                  target="_blank"
                >
                  {company.company}
                </Link>{" "}
                • <span className="text-sm">{company.type}</span>
              </p>
              <p className="text-sm text-muted-foreground">{`${company.startDate} - ${company.endDate}`}</p>
            </div>
          </Link>
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <GemIcon size={15} /> {company.skills}
          </div>
        </div>
      ))}
    </div>
  );
}
