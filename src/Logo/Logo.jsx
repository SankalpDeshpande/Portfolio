import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <section className="logoParent">
      <section className="container">
        <div className="icon">
          <div className="icon">
            <span className="one h6"></span>
            <div className="letter">S</div>
            <span className="two h3"></span>
          </div>
        </div>

        <div className="icon">
          <div className="icon">
            <span className="one h1"></span>
            <span className="two h4"></span>
          </div>
        </div>

        <div className="icon">
          <div className="icon">
            <span className="one h5"></span>
            <span className="two h2"></span>
          </div>
        </div>
      </section>
    </section>
  );
}
