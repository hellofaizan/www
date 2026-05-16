import React from "react";
import { Metadata } from "next";
import ProjectCard from "~/components/projectcard";
import { projectsData } from "~/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Mohammad Faizan",
  description:
    "Explore Mohammad Faizan's full-stack web, AI, and desktop projects including Unilink, Curtain AI, and SnapSense.",
  openGraph: {
    title: "Projects | Mohammad Faizan",
    description:
      "Explore Mohammad Faizan's full-stack web, AI, and desktop projects including Unilink, Curtain AI, and SnapSense.",
    url: "https://mohammadfaizan.com/projects",
    siteName: "Mohammad Faizan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohammad Faizan",
    description:
      "Explore Mohammad Faizan's full-stack web, AI, and desktop projects including Unilink, Curtain AI, and SnapSense.",
  },
  alternates: {
    canonical: "https://mohammadfaizan.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-8 md:gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects | Mohammad Faizan",
            description:
              "Full-stack web, AI, and desktop projects by Mohammad Faizan.",
            url: "https://mohammadfaizan.com/projects",
          }),
        }}
      />
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-1">
          Production apps across full-stack SaaS, AI infrastructure, and desktop
          tooling.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            stack={project.stack}
            logo={project.logo}
            link={project.link}
            github={project.github}
            status={project.status}
            highlights={project.highlights}
          />
        ))}
      </div>
    </main>
  );
}
