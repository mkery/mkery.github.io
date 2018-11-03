import React, { Component } from "react";
import PaperProject from "./PaperProject";
import "./App.css";

class ProjectList extends Component {
  render() {
    return (
      <div>
        <PaperProject name="Verdant" />
        <PaperProject name="APIs" />
        <PaperProject name="ErrorHandling" />
        <PaperProject name="Misc" />
      </div>
    );
  }
}

export default ProjectList;
