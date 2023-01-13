import React from "react";
import Content from "../Components/Content";
import Left from "../Components/Left";
import Navbar from "../Components/Navbar";
import Right from "../Components/Right";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <div className="mainContent">
        <Left />
        <Content />
        <Right />
      </div>
    </div>
  );
}
