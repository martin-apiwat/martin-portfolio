import React from "react";

function Project({ image, name, skills, link }) {
   return (
      <div className="card">
         <div className="image">
            <img src={image} width="100%" height="125px" alt="" />
         </div>
         <div className="card-b">
            <div>
               <h2 className="name">{name}</h2>
               <div className="skills">
                  {skills.map((skill) => {
                     return <div>{skill}</div>;
                  })}
               </div>
            </div>
            <a href={link}>
               <img className="github-logo" src="./img/github.svg" alt="" />
            </a>
         </div>
      </div>
   );
}

export default Project;
