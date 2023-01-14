import React from "react";

export default function Experience() {
  return (
    <div id="experience">
      <h1>
        <span className="number">02. </span>Where I’ve Worked
        <div className="experienceline"></div>
      </h1>
      <div className="experiencecontent">
        <h1>
          Engineer <span className="creamsmall">@Infosys</span>
        </h1>
        <p className="subtext">
          <i>Aug 2019 - Present</i>
        </p>
        <p>
          Worked as front-end developer in insurance domain.
          <ul>
            <li>
              Developed a website for agents to create insurance policies for
              new customers across 51 US states.
            </li>
            <li>
              Enhanced functionality of the website to modify existing policies
              and renew them.
            </li>
            <li>
              Enabled the end users to create insurance policies on their own.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
