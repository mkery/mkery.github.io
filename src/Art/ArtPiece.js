import React, { Component } from "react";

class ArtPiece extends Component {
  render() {
    return (
      <div className="cube">
        <img className="artImage" src={this.props.src} />
      </div>
    );
  }
}

export default ArtPiece;
