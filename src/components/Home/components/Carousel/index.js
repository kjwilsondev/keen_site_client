import React from "react";
// import { Flickity } from "flickety";
import "./styles.css";
import houseParty from "../../../../houseparty.jpg";
import girlSings from "../../../../girl_sing.jpg";
import missuri from "../../../../missuri.jpg";
import rap from "../../../../rap.jpg";

// Prop: array of image links
const Carousel = ({ images }) => {
  return (
    // options on main-carousel can be set using:
    // data-flickity='{ "cellAlign": "left", "contain": true }'
    <div
      className="carousel"
      data-flickity='{ "wrapAround": true, "autoPlay": 5000, "pauseAutoPlayOnHover": false, "friction": 0.6, "imagesLoaded": true}'
    >
      {/* TODO: map images to carousel cells */}
      <img className="carousel-cell" src={houseParty} />
      <img className="carousel-cell" src={girlSings} />
      <img className="carousel-cell" src={missuri} />
      <img className="carousel-cell" src={rap} />
      {/* <div className="carousel-cell"></div> */}
    </div>
  );
};

export default Carousel;
