import React from "react";

function Navbar() {
   return (
      <div className="nav-container">
         <div className="navbar">
            <div
               className="contact"
               onClick={() => {
                  window.open("mailto:martin.apiwat@gmail.com");
               }}
            >
               Kontakta mig
            </div>
            <ul className="menu-items">
               <li
                  onClick={() =>
                     document.getElementById("about").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                     })
                  }
               >
                  Om mig
               </li>
               <li
                  onClick={() =>
                     document.getElementById("projects").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                     })
                  }
               >
                  Projekt
               </li>
               <li
                  onClick={() =>
                     document.getElementById("contact").scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                     })
                  }
               >
                  Kontakt
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
