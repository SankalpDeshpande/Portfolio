import React from "react";
import "./Navbar.css";
import S from "../assets/S.png";
import Resume from "../assets/Sankalp_B_Deshpande_resume.pdf";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/Portfolio">
          <img src={S} alt="logo" width={70} height={70} />
        </a>
      </div>
      <div className="navItems">
        <div className="navitem">
          <a href="#about"><span className="number">01. </span>About</a>
        </div>
        <div className="navitem">
          <a href="#experience"><span className="number">02. </span>Experience</a>
        </div>
        <div className="navitem">
          <a href="#work"><span className="number">03. </span>Work</a>
        </div>
        <div className="navitem">
          <a href="#contact"><span className="number">04. </span>Contact</a>
        </div>
        <div className="navitem">
          <a href={Resume} className="button" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
