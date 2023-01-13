import React from "react";
import "./Navbar.css";
import S from "../assets/S.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={S} alt="logo" width={70} height={60} />
        </a>
      </div>
      <div className="navItems">
        <div className="navitem">
          <p>01. About</p>
        </div>
        <div className="navitem">
          <p>02. Experience</p>
        </div>
        <div className="navitem">
          <p>03. Work</p>
        </div>
        <div className="navitem">
          <p>04. Contact</p>
        </div>
        <div className="resume">
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
}
