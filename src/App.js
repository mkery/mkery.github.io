import React, { Component } from "react";
import "./App.css";
import AboutPage from "./About";
import ArtPage from "./Art";
import TeachingPage from "./Teaching";

const PAGES = {
  ABOUT: { label: "About", component: AboutPage },
  TEACHING: { label: "Teaching", component: TeachingPage },
  ART: { label: "Art & Fun", component: ArtPage },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: PAGES.ABOUT,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="nav nav-left">
            {this.showPageTitle(PAGES.ABOUT)}
            <div className="nav-title">
              <a href="https://docs.google.com/document/d/1oeHCv2ClCO9JYpBACE7vhEUNlH211JMYnNpfbl9jYgY/edit">
                CV
              </a>
            </div>
            <div className="nav-title">
              <a href="https://mary-beth-kery.medium.com/">
                Medium
              </a>
            </div>
          </div>
          <div
            className="header-name"
            onClick={() => this.setState({ page: PAGES.ABOUT })}
          >
            MARY BETH KERY
          </div>
          <div className="nav nav-right">
            {this.showPageTitle(PAGES.TEACHING)}
            {this.showPageTitle(PAGES.ART)}
          </div>
        </div>
        {this.showSubtitle()}
        {<this.state.page.component />}
        <footer>Mary Beth Kery 2020 all rights reserved</footer>
      </div>
    );
  }

  showSubtitle() {
    if (this.state.page === PAGES.ABOUT)
      return (
        <div className="subtitle">
          {"/* Designing & teaching for futures of programming */"}
        </div>
      );
    return <div className="subtitle" />;
  }

  showPageTitle(title) {
    return (
      <div
        className={`nav-title ${
          this.state.page.label === title.label ? "current" : ""
        }`}
        onClick={() => this.setState({ page: title })}
      >
        {title.label}
      </div>
    );
  }
}

export default App;
