import React from "react";
import "./Left.css";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
export default function Left() {
  return (
    <div className="left">
      <div className="iconDiv">
        <a
          href="https://github.com/SankalpDeshpande"
        >
          <img src={github} alt="logo" width={50} height={50} />
        </a>
      </div>
      <div className="iconDiv">
        <a
          href="https://www.instagram.com/sankalp_deshpande_/"
          className="icon-left"
        >
          <img src={instagram} alt="logo" width={40} height={40} />
        </a>
      </div>
      <div className="iconDiv">
        <a href="https://twitter.com/SankalpDeshpan1" className="icon-left">
          <img src={twitter} alt="logo" width={40} height={40} />
        </a>
      </div>
      <div className="iconDiv">
        <a
          href="https://www.linkedin.com/in/sankalp-deshpande/"
          className="icon-left"
        >
          <img src={linkedin} alt="logo" width={40} height={40} />
        </a>
      </div>
      <div class="leftline"></div>
    </div>
  );
}
