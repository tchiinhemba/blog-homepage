import React from "react";
import "./styles.scss";

export function Hero() {
  return (
    <React.Fragment>
      <div className="hero_wrapper">
        <div className="hero_information">
          <p>WELCOME TO MY BLOG</p>
          <h1>We all owe<br/>death a life <span></span></h1>
          <p>
            Here is a place that I share my writings about design <br/> and 
            photography. Read, write & discuss with me.
          </p>
        </div>
        <div className="left-spacer"></div>
      </div>
    </React.Fragment>
  );
}
