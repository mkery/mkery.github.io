import React, { Component } from "react";
import PaperProject from "./PaperProject";
import Script from "react-load-script";

class ProjectList extends Component {
  render() {
    return (
      <div>
        <PaperProject name="Verdant" />
        <PaperProject name="APIs" />
        <PaperProject name="ErrorHandling" />
        <div className="githubcard">
          <div
            className="github-card"
            data-github="mkery/Verdant"
            data-width="400"
            data-height="153"
            data-theme="medium"
          />
          <Script url="//cdn.jsdelivr.net/github-cards/latest/widget.js" />
        </div>
      </div>
    );
  }
}

export default ProjectList;
