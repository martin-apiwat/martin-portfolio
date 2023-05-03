import React from "react";
import Project from "./Project";
import PROJECTS from "../projects";

function Projects() {
   const renderProjects = () => {
      return PROJECTS.map((project, i) => <Project {...project} key={i} />);
   };
   return <div>{renderProjects()}</div>;
}

export default Projects;