import React from "react";
import Flickity from "flickity-imagesloaded";

import "./styles.css";
import houseParty from "../../../../houseparty.jpg";
import girlSings from "../../../../girl_sing.jpg";
import missuricrop from "../../../../missuricrop.jpg";
import rap from "../../../../rap.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
    };
  }

  // Prop: array of image links
  componentDidMount() {
    this.setState({ mount: true });
  }

  render() {
    if (this.state.mount === true) {
      var carousel = document.querySelector(".carousel");
      console.log(carousel);
      var flkty = new Flickity(carousel, {
        imagesLoaded: true,
        percentPosition: false,
        autoPlay: 3500,
        wrapAround: true,
        pageDots: false,
      });

      var imgs = carousel.querySelectorAll(".carousel-cell img");
      // get transform property
      var docStyle = document.documentElement.style;
      var transformProp =
        typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

      flkty.on("scroll", function () {
        flkty.slides.forEach(function (slide, i) {
          // var img = imgs[i];
          // var x = ((slide.target + flkty.x) * -1) / 3;
          // img.style[transformProp] = "translateX(" + x + "px)";

          var img = imgs[i],
            x = 0;

          if (0 === i) {
            x =
              Math.abs(flkty.x) > flkty.slidesWidth
                ? flkty.slidesWidth +
                  flkty.x +
                  flkty.slides[flkty.slides.length - 1].outerWidth +
                  slide.target
                : slide.target + flkty.x;
          } else if (i === flkty.slides.length - 1) {
            x =
              Math.abs(flkty.x) + flkty.slides[i].outerWidth < flkty.slidesWidth
                ? slide.target -
                  flkty.slidesWidth +
                  flkty.x -
                  flkty.slides[i].outerWidth
                : slide.target + flkty.x;
          } else {
            x = slide.target + flkty.x;
          }
          img.style[transformProp] = "translateX(" + x * (-1 / 3) + "px)";
        });
      });
    }
    return (
      <div className="carousel">
        <div className="carousel-cell">
          <img src={houseParty} alt="houseParty" />
        </div>
        <div className="carousel-cell">
          <img src={girlSings} alt="girlSings" />
        </div>
        <div className="carousel-cell">
          <img src={missuricrop} alt="missuri" />
        </div>
        <div className="carousel-cell">
          <img src={rap} alt="rap" />
        </div>
      </div>
    );
  }
}

export default Carousel;
