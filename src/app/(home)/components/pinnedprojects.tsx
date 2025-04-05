import React from "react";
import ProjectCard from "~/components/projectcard";

export default function Pinnedprojects() {
  const Pinnedprojects = [
    {
      title: "Tielinks",
      description: "A super cool link in bio website to showcase your links in a beautiful way.",
      logo: "/projectlogos/tielinks.svg",
      link: "https://tielinks.vercel.app",
      status: "WIP",
    },
    {
      title: "Pouzz App",
      description: "Get anonymous confession, questions and testimonials from the online world",
      logo: "/projectlogos/pouzz.svg",
      link: "https://pouzz.xyz",
      status: "WIP",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {Pinnedprojects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          logo={project.logo}
          link={project.link}
          status={project.status}
        />
      ))}
    </div>
  );
}
