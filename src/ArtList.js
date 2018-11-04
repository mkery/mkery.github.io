import React, { Component } from "react";
import Video from "./Video.js";
import Portfolio from "./Portfolio.js";
import "./App.css";

class ArtList extends Component {
  render() {
    return (
      <div className="artGallery">
        <Video
          content={
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/G3v5T1B2ZDU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          }
          desc="Milk Junior is an animated short about a very poor svg rendering algorithm named milk junior who is struggling with a fear that he is stupider than everyone else. Created in a HTML Canvas using stupid algorithms [by me]!"
        />
        <Video
          content={
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FzB3PDggMhI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          }
          desc="
 A film created with hand-drawn animation processed through a pix2pix model trained on dancers from CMU Panoptic dataset.   Late night art project collaboration for an Art & ML class with Ken Holstein and Lea Albaugh."
        />
        <Video
          content={
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/i9QT7wh9-Hg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          }
          desc="Putti: Post-Human Art Crawl is a web game prototype that lets you explore the world of art history by walking within paintings. Based on depth detection from still paintings and open-source art archives. Collaboration with Ken Holstein."
        />
        <Portfolio />
      </div>
    );
  }
}

export default ArtList;
