import React from "react";
import About from "../Content/About";
import Contact from "../Content/Contact";
import FirstPage from "../Content/FirstPage";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <FirstPage />
      <About />
      <div id="experience"></div>
      <div id="work"></div>
      <Contact />
    </div>
  );
}
