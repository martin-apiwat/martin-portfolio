import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";

export default function App() {
   return (
      <div>
         <Navbar />
         <About />
         <Projects />
      </div>
   );
}
