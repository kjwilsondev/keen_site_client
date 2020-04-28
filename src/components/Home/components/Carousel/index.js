import React from "react";
// import { Flickity } from "flickety";
import "./styles.css";

// Prop: array of image links
const Carousel = ({images}) => {
  return (
    // options on main-carousel can be set using:
    // data-flickity='{ "cellAlign": "left", "contain": true }'
    <div
      className="carousel"
      data-flickity='{ "wrapAround": true, "autoPlay": 5000, "pauseAutoPlayOnHover": false, "friction": 0.6 }'
    >
      {/* TODO: map images to carousel cells */}
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
      <div className="carousel-cell"></div>
    </div>
  );
};

export default Carousel;
