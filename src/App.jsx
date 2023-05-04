import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
   return (
      <div className="main-container">
         <Navbar />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}
