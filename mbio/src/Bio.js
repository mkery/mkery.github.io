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
            <br />
            pronouns: she/her
          </div>
        </div>
        <div className="row-right Bio-intro">
          Greetings! I am a 4th year PhD student. I research programming
          practices, with a general goal to improve developer experience for
          all. My current focus is to use HCI methods to study and design/create
          new tools to support individuals who do data science coding such as
          developing machine learning models or exploratory data analysis. ＼ʕ
          •ᴥ• ʔ／
          <br /> <br />
          At the{" "}
          <a href="https://hcii.cmu.edu/">
            Human-Computer Interaction Institute
          </a>{" "}
          at Carnegie Mellon University in the the{" "}
          <a href="http://www.cs.cmu.edu/~NatProg/">
            Natural Programming (BAM) Group
          </a>
          . Prior, I did my BA at Wellesley College in CS.
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
