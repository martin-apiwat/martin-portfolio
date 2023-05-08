import React from "react";
import Carousel from "./Carousel";

function About() {
   return (
      <div className="about-container">
         <div className="image-text">
            <div className="profile-pic"></div>
            <p>Hej, mitt namn är Martin 👋</p>
            <h2>
               Bakgrund inom teknisk support och customer success som nu bygger
               en karriär som utvecklare
            </h2>
         </div>
         <Carousel />
      </div>
   );
}

export default About;
