import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <>
      <section className="container">
        <div>
          <div>
            <span className="one h6"></span>
            <div className="letter">S</div>
            <span className="two h3"></span>
          </div>
        </div>

        <div>
          <div>
            <span className="one h1"></span>
            <span className="two h4"></span>
          </div>
        </div>

        <div>
          <div>
            <span className="one h5"></span>
            <span className="two h2"></span>
          </div>
        </div>
      </section>
    </>
  );
}
