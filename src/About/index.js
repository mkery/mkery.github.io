import React, { Component } from "react";
import Bio from "./Bio.js";
import ProjectList from "./ProjectList.js";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <Bio />
        <ProjectList />
      </div>
    );
  }
}
