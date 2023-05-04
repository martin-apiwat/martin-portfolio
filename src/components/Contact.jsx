import React from "react";
import MailIcon from "../assets/mail.svg";

const Contact = () => {
   return (
      <div className="contact-container">
         <h1>
            Nå ut till mig, så kan vi prata om hur jag kan bidra med värde.
         </h1>
         <button
            onClick={() => {
               //detect if user has mail client

               window.open("mailto:martin.apiwat@gmail.com");
            }}
         >
            Kontakta mig
            <img src={MailIcon} alt="mail-icon" className="mail-icon" />
         </button>
         <p>martin.apiwat@gmail.com</p>
      </div>
   );
};

export default Contact;
