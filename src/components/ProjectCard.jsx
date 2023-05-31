import "./ProjectCard.css";
import github from "../assets/github.svg";

const ProjectCard = ({ image, name, skills, link, info }) => {
   return (
      <div className="ProjectCard">
         <div className="ProjectCard__image">
            <img src={image} alt="name" />
         </div>
         <div className="ProjectCard__details">
            <h2 className="ProjectCard__title">{name}</h2>
            <div className="ProjectCard__desc">{info}</div>
            <div className="ProjectCard__skills">
               {skills.map((skill) => {
                  return <span>{skill}</span>;
               })}
            </div>
            <a href={link}>
               <img className="github-logo" src={github} alt="" />
            </a>
         </div>
      </div>
   );
};

export default ProjectCard;
