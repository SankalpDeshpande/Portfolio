import React from "react";
import About from "../Content/About";
import Contact from "../Content/Contact";
import Experience from "../Content/Experience";
import FirstPage from "../Content/FirstPage";
import Work from "../Content/Work";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <FirstPage />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
