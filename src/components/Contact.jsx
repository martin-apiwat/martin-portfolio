import React from "react";
import MailIcon from "../assets/mail.svg";

const Contact = () => {
   return (
      <div className="contact-container" id="contact">
         <h2>Behöver ni förstärking i ert team?</h2>
         <div className="contact-content">
            <button
               onClick={() => {
                  //detect if user has mail client

                  window.open("mailto:martin.apiwat@gmail.com");
               }}
            >
               Kontakta mig
               <img src={MailIcon} alt="mail-icon" className="mail-icon" />
            </button>
            <div>
               <p>martin.apiwat@gmail.com</p>
               <p>073 573 71 73</p>
            </div>
         </div>
      </div>
   );
};

export default Contact;
