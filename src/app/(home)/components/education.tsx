import Image from "next/image";
import Link from "next/link";
import { PortfolioCard } from "~/components/portfolio-card";

const educationData = [
  {
    institution: "NIT Srinagar",
    institutionLong: "National Institute of Technology Srinagar",
    degree: "Civil Engineering",
    link: "https://nitsri.ac.in",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/National_Institute_of_Technology%2C_Srinagar_Logo.png/500px-National_Institute_of_Technology%2C_Srinagar_Logo.png",
    startDate: "Aug 2025",
    endDate: "July 2029",
    description: "BTech",
    descriptionLong: "Bachelor of Technology",
  },
];

export default function Education() {
  return (
    <div className="w-full">
      {educationData.map((edu, index) => (
        <PortfolioCard key={index}>
          <div className="flex items-start gap-3">
            <Link
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg bg-white p-1 ring-1 ring-border/60"
              data-sln-event="user: Education visited"
            >
              <Image
                src={edu.logo}
                alt={edu.institution}
                width={56}
                height={56}
                className="h-14 w-14 rounded-md object-contain"
              />
            </Link>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold leading-tight">
                <span className="hidden md:inline">{edu.institutionLong}</span>
                <span className="md:hidden">{edu.institution}</span>
              </h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                <Link
                  href={edu.link}
                  className="hover:text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-sln-event="user: Education visited"
                >
                  <span className="hidden md:inline">{edu.descriptionLong}</span>
                  <span className="md:hidden">{edu.description}</span>
                  {" · "}
                  {edu.degree}
                </Link>
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
          </div>
        </PortfolioCard>
      ))}
    </div>
  );
}
