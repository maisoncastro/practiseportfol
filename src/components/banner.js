import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>The best deals in Montreal</span>
            </div>
            <div className="line">
              <span>to drink.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us! <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
