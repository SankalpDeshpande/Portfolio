import React from "react";
import "./Navbar.css";
import S from "../assets/S.png";
import Resume from "../assets/Sankalp_B_Deshpande_resume.pdf";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/Portfolio">
          <img src={S} alt="logo" width={70} height={60} />
        </a>
      </div>
      <div className="navItems">
        <div className="navitem">
          <a href="#about" >01. About</a>
        </div>
        <div className="navitem">
          <a href="#experience">02. Experience</a>
        </div>
        <div className="navitem">
          <a href="#work">03. Work</a>
        </div>
        <div className="navitem">
          <a href="#contact">04. Contact</a>
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
