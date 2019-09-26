import React, { Component } from "react";
import "./App.css";

class Video extends Component {
  render() {
    return (
      <div className="cube">
        <div className="cubeContent">{this.props.content}</div>
        <div className="cubeDesc">{this.props.desc}</div>
      </div>
    );
  }
}

export default Video;