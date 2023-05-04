import React from "react";

function Project({ image, name, skills, link }) {
   return (
      <div className="card">
         <div className="image">{image}</div>
         <h2 className="name">{name}</h2>
         <p className="skills">{skills}</p>
         <a href={link}>
            <img className="image" src="./img/github.svg" alt="" />
         </a>
      </div>
   );
}

export default Project;
