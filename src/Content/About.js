import React from "react";
import san from "../assets/san.jpg";

export default function About() {
  return (
    <div id="about">
      <br/>
      <br/>
      <h1><span className="number">01. </span>About Me<div className="line"></div></h1>  
      <div className="aboutcontent">
        <p>
          Hello! My name is Sankalp and I enjoy creating things that live on the
          internet. My interest in web development started back in 2019 when I
          decided to build websites using HTML, CSS and JS.
          <br />
          <br />
          Fast-forward to today, and I’ve had the privilege of working at
          <a href="https://www.infosys.com/">
            <b> Infosys </b>
          </a>
          with various Insurance domain clients. My main focus these days is
          building accessible, inclusive products and digital experiences at
          Infosys.
          <br />
          <br />
          Here are a few technologies I’ve been working with recently:
          <br />
          <ul>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>JavaScript (ES6+)</li>
          </ul>
        </p>
        <img src={san} alt="profilepic" className="profilepic" />
      </div>
    </div>
  );
}
