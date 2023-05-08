import React from "react";
import MailIcon from "../assets/mail.svg";

const Contact = () => {
   return (
      <div className="contact-container">
         <h2>Söker ni förstärking i ert team?</h2>
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
         <p>073 573 71 73</p>
      </div>
   );
};

export default Contact;
