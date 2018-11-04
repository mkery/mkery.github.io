import React, { Component } from "react";
import * as path from "path";
import * as Cite from "citation-js";

import "./App.css";

const projectDir = path.join(process.env.PUBLIC_URL, "projects");

class PaperProject extends Component {
  state = {
    bibData: null,
    title: null,
    desc: null
  };

  componentDidMount() {
    this.loadPapers();
    this.loadDesc();
  }

  loadDesc() {
    let verdantPath = path.resolve(projectDir, this.props.name);
    fetch(verdantPath + "/" + this.props.name + ".json")
      .then(response => {
        return response.json();
      })
      .then(jsn => {
        this.setState({ title: jsn.title });
        this.setState({ desc: jsn.desc });
      });
  }

  loadPapers() {
    let verdantPath = path.resolve(projectDir, this.props.name);
    fetch(verdantPath + "/" + this.props.name + ".bib")
      .then(response => {
        return response.text();
      })
      .then(findresponse => {
        Cite.async(findresponse).then(formatted => {
          let papers = [];
          formatted.data.map(item => {
            //console.log(item);
            let cite = new Cite(item);
            let citation = cite.get({
              format: "string",
              type: "string",
              style: "citation-apa",
              lang: "en-US"
            });
            let url = projectDir + "/" + this.props.name + "/" + item.URL;
            papers.push({ url: url, citation: citation });
          });

          this.setState({
            bibData: papers
          });
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="row-left">
          <div className="project-title">{this.state.title}</div>
        </div>
        <div className="row-right">
          <div className="Bio-intro">{this.state.desc}</div>
          {this.showBib()}
        </div>
      </div>
    );
  }

  showBib() {
    if (this.state.bibData) {
      return this.state.bibData.map(paper => (
        <div className="paper">
          {paper.citation}
          <div className="paperLink">
            <a href={paper.url}>[pdf]</a>
          </div>
        </div>
      ));
    }
  }
}

export default PaperProject;
