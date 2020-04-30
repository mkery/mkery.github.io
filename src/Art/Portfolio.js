import React, { Component } from "react";
import ArtPiece from "./ArtPiece.js";
import * as path from "path";

class Portfolio extends Component {
  state = {
    images: null,
  };

  componentDidMount() {
    let artPath = path.join(process.env.PUBLIC_URL, "/resources/art/");
    fetch(artPath + "show.txt")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        let pieces = data.split("\n");
        pieces.pop();
        pieces = pieces.map((item) => artPath + item);
        this.setState({ images: pieces });
      });
  }

  render() {
    if (this.state.images) {
      let images = this.state.images.map((piece) => <ArtPiece src={piece} />);
      return <div className="Portfolio">{images}</div>;
    }
    return null;
  }
}

export default Portfolio;
