import React from "react";

function Project({ image, name, skills, link }) {
   return (
      <div className="card">
         <div className="image">
            <img src={image} width="200px" alt="" />
         </div>
         <div className="card-b">
            <h2 className="name">{name}</h2>
            <div className="skills">
               {skills.map((skill) => {
                  return <div>{skill}</div>;
               })}
            </div>
            <a href={link}>
               <img className="github" src="./img/github.svg" alt="" />
            </a>
         </div>
      </div>
   );
}

export default Project;
