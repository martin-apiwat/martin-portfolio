import React from "react";
import PROJECTS from "../projects";
import ProjectCard from "./ProjectCard";

console.log(PROJECTS);

function Projects() {
   const renderProjects = () => {
      return PROJECTS.map((project, i) => <ProjectCard {...project} key={i} />);
   };
   return (
      <div className="projects" id="projects">
         {renderProjects()}
      </div>
   );
}

export default Projects;
