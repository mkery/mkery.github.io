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
          <div className="Bio-contact">mkery [at] cs.cmu.edu</div>
          <div className="Bio-image" />
          <div className="Bio-contact">
            <a href={github}>github</a>
            <br />
            <a href={scholar}>google scholar</a>
            <br />
            <a href={cv}>cv</a>
            <br />
            4607 Newell-Simon Hall
            <br />
            pronouns: she/her
          </div>
        </div>
        <div className="row-right Bio-intro">
          I research programming practices, with a general goal to improve
          developer experience for all. My current focus is to use HCI methods
          to study and design/create new tools to support individuals who do
          data science coding such as developing machine learning models or
          exploratory data analysis.
          <br /> <br />
          Currently: 5th year PhD student at the{" "}
          <a href="https://hcii.cmu.edu/">
            Human-Computer Interaction Institute
          </a>{" "}
          in the School of Computer Science at at Carnegie Mellon University in
          the the{" "}
          <a href="http://www.cs.cmu.edu/~NatProg/">
            Natural Programming (BAM) Group
          </a>
          <br /> <br />
          Previously: I've had the opportunity of research internships at Apple
          Inc. and Bloomberg L.P. I did my BA in Computer Science at Wellesley
          College.
          <br /> <br />
          <i>
            background-image: a programmer for the 1940 US census. Just a
            reminder that the nature of what programming is and who does
            programming is always changing.
          </i>
        </div>
      </div>
    );
  }
}

export default Bio;
