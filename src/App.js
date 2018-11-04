import React, { Component } from "react";
import "./App.css";
import Bio from "./Bio.js";
import ProjectList from "./ProjectList.js";
import ArtList from "./ArtList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header name-header">Mary Beth Kery</div>
        <div className="name-subtitle">HCI researcher + Artist + Developer</div>
        <Bio />
        <div className="header project-header">Projects</div>
        <ProjectList />
        <div className="header art-header">Art & Stuff</div>
        <ArtList />
        <footer>Mary Beth Kery 2018 all rights reserved</footer>
      </div>
    );
  }
}

export default App;
