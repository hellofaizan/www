import React from "react";
import ProjectCard from "~/components/projectcard";
import { projectsData } from "~/data/portfolio";

export default function Pinnedprojects() {
  return (
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
  );
}
