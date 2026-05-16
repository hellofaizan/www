import Image from "next/image";

const tech = [
  { logo: "/techlogos/typescript.svg", name: "TypeScript" },
  { logo: "/techlogos/kotlin.svg", name: "Kotlin" },
  { logo: "/techlogos/java.svg", name: "Java" },
  { logo: "/techlogos/nextjs.svg", name: "Next.js" },
  { logo: "/techlogos/react.svg", name: "React" },
  { logo: "/techlogos/postgresql.svg", name: "PostgreSQL" },
  { logo: "/techlogos/tailwindcss.svg", name: "Tailwind CSS" },
  { logo: "/techlogos/hugging_face.svg", name: "AI / ML" },
  { logo: "/techlogos/android-icon.svg", name: "Android" },
  { logo: "/techlogos/figma.svg", name: "Figma" },
];

export default function MainSkills() {
  return (
    <div className="flex flex-wrap gap-2">
      {tech.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2 rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1.5 transition-colors hover:border-border hover:bg-muted/70"
        >
          <Image
            src={item.logo}
            alt=""
            className="h-4 w-4 md:h-5 md:w-5"
            width={20}
            height={20}
          />
          <span className="text-xs font-medium md:text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
