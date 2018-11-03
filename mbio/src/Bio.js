import React, { Component } from "react";
import "./App.css";

const github = "https://github.com/mkery";
const scholar =
  "https://scholar.google.com/citations?user=KR8gY5kAAAAJ&hl=en&oi=ao";
const cv =
  "file:///Users/mkery/Desktop/mkery.github.io/resources/marybethkerycv.pdf";

class Bio extends Component {
  render() {
    return (
      <div className="row Bio-row">
        <div className="row-left">
          <div className="Bio-image" />
          <div className="Bio-contact">
            mkery [at] cs.cmu.edu
            <br />
            <a href={github}>github</a>
            <br />
            <a href={scholar}>google scholar</a>
            <br />
            <a href={cv}>cv</a>
            <br />
            4607 Newell-Simon Hall
          </div>
        </div>
        <div className="row-right Bio-intro">
          Greetings! I am a 3rd year PhD student at the Human-Computer
          Interaction Institute (HCII) at Carnegie Mellon University. I am a
          part of the Natural Programming Lab, and advised by Professor Brad
          Myers. I did my undergrad at Wellesley College, and studied computer
          science and art.
          <br />
          <br />I research creativity support, particularly for exploratory
          programming tasks. My current work is in studying creative and
          exploratory programming practices, and studying individuals who
          perform exploratory tasks with data, such as developing machine
          learning models or exploratory data analysis.
          <br /> <br />
          //background-image: a programmer for the 1940 US census. Just a
          reminder that the nature of what programming is and who does
          programming is always changing.
        </div>
      </div>
    );
  }
}

export default Bio;
