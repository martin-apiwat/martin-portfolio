import "./ProjectCard.css";

const ProjectCard = ({ image, name, skills, link }) => {
   return (
      <div className="ProjectCard">
         <div className="ProjectCard__image">
            <img src={image} width={"100%"} alt="name" />
         </div>
         <div className="ProjectCard__details">
            <h2 className="ProjectCard__title">{name}</h2>
            <div className="ProjectCard__desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque a
               rem tenetur dolores quod aut, cum vitae voluptatem odio, id illo?
               Doloremque facere libero id ab natus perspiciatis doloribus ipsa?
            </div>
            <div className="ProjectCard__skills">
               {skills.map((skill) => {
                  return <span>{skill}</span>;
               })}
            </div>
            <a href={link}>
               <img className="github-logo" src="./img/github.svg" alt="" />
            </a>
         </div>
      </div>
   );
};

export default ProjectCard;
