import React from "react";
import ProjectCard from "~/components/projectcard";

export default function Pinnedprojects() {
  const Pinnedprojects = [
    {
      title: "Project 1",
      description: "Project 1 Description",
      logo: "/techlogos/kotlin.svg",
      link: "https://findsaas.pro",
      status: "WIP",
    },
    {
      title: "Project 2",
      description: "Project 2 Descriptionawd aw dwad awawdawd awdygawgdaywd awd awyd",
      logo: "/techlogos/raspberrypi.svg",
      link: "Project 2 Link",
      status: "SOLD",
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
