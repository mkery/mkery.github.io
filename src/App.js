import React, { Component } from "react";
import "./App.css";
import Bio from "./Bio.js";
import ProjectList from "./ProjectList.js";
import ArtList from "./ArtList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="nav nav-left">
            <div className="nav-title">About</div>
            <div className="nav-title">CV</div>
          </div>
          <div className="header-name">MARY BETH KERY</div>
          <div className="nav nav-right">
            <div className="nav-title">Teaching</div>
            <div className="nav-title">Art</div>
          </div>
        </div>
        <div className="subtitle">
          /* Designing for futures of programming */
        </div>
        <Bio />
        <ProjectList />
        <footer>Mary Beth Kery 2019 all rights reserved</footer>
      </div>
    );
  }
}

export default App;
