import React, { Component } from "react";

const github = "https://github.com/mkery";
const scholar =
  "https://scholar.google.com/citations?user=KR8gY5kAAAAJ&hl=en&oi=ao";
const cv =
  "https://docs.google.com/document/d/1oeHCv2ClCO9JYpBACE7vhEUNlH211JMYnNpfbl9jYgY/edit";

class Bio extends Component {
  render() {
    return (
      <div className="row Bio-row">
        <div className="row-left">
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
            <br />
            mkery [at] cs.cmu.edu
          </div>
        </div>
        <div className="row-right Bio-intro">
          <b>UX for code.</b> I research programming practices, with a general goal to improve
          developer experience for all. I use HCI methods
          to study and design/create new tools to support individuals who do
          data or ML coding such as developing machine learning models or
          exploratory data analysis. Also passionate about teaching HCI, programming, and human-centered
          ML/AI/data practice topics to give students a balance between technical rigor, and ethical design sensitivity.
          <br /> <br />
          <b>Currently:</b> 5th year PhD student at the{" "}
          <a href="https://hcii.cmu.edu/">
            Human-Computer Interaction Institute
          </a>{" "}
          in the School of Computer Science at at Carnegie Mellon University in
          the the{" "}
          <a href="http://www.cs.cmu.edu/~NatProg/">
            Natural Programming (BAM) Group
          </a>
          <br /> <br />
          <b>Previously:</b> Researcher at Apple
          Inc. (contractor); Research Intern at Apple Inc.; UX Intern Bloomberg L.P.; BA in Computer Science at Wellesley
          College; brief stint at Slade School of Fine Art
          <br /> <br />
          <b>Also:</b> Software engineer; designer; artist; parent
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
