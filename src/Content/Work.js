import React from "react";
import portfolio from "../assets/portfolio.png";
import github from "../assets/github.png";

export default function Work() {
  return (
    <div id="work">
      <h1>
        <span className="number">03. </span>Some Things I’ve Built
        <div className="workline"></div>
      </h1>
      <div className="workcontent">
        <div className="projectpic">
          <img src={portfolio} width={600} height={300} alt="portfolio" />
        </div>
        <div className="prjectdetails">
          <h1 className="number">Portfolio Website</h1>
          <p>A webite to showcase my information, projects, and experience.</p>

          <span className="githublink">
            <a href="https://github.com/SankalpDeshpande/Portfolio">
              <img src={github} alt="logo" width={30} height={30} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
