import React from "react";
import Project from "./Project";
import PROJECTS from "../projects";

console.log(PROJECTS);

function Projects() {
   const renderProjects = () => {
      return PROJECTS.map((project, i) => <Project {...project} key={i} />);
   };
   return (
      <div className="projects" id="projects">
         {renderProjects()}
      </div>
   );
}

export default Projects;
