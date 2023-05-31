import kanban from "./assets/Kanban.png";
import spotify from "./assets/Spotify.png";
import klarna from "./assets/Klarna-Checkout.png";

const PROJECTS = [
   {
      image: kanban,
      name: "Kanban",
      info: "Jag har byggt en responsiv Kanban tavla med drag and drop funktion. Man kan lägga till nya tickets, välja vilken fas den är i, samt flytta tickets mellan faserna.",
      skills: ["TypeScript", "React", "SCSS"],
      link: "https://github.com/martin-apiwat/kanban-board",
   },
   {
      image: spotify,
      name: "Spotify Clone",
      info: "Jag byggde en spotify klon med hjälp av Spotifys API. Man kan logga in på sitt riktiga Spotify konto, se sina personliga spellistor, samt spela upp, pause:a och skippa låtar på sina spellistor.",
      skills: ["JavaScript", "Next.js", "Tailwind", "Spotify-API"],
      link: "https://github.com/martin-apiwat/spotify-clone",
   },
   {
      image: klarna,
      name: "Klarna Checkout",
      info: "Jag har byggt en Klarna Checkout med hjälp av Klarnas API dokumentation som kan användas som en fristående betalningsportal och integreras i andra e-handelssidor.",
      skills: ["JavaScript", "Express", "Node.js"],
      link: "https://github.com/martin-apiwat/Klarna-Checkout",
   },
];

export default PROJECTS;
