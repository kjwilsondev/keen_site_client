import React, { Component } from "react";
import Logo from "../Logo";
import "./styles.css";
import keenLogo from "../../keen_logo.png";
import Carousel from "./components/Carousel";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        {/* <Logo picture={keenLogo} /> */}
        <Carousel />
      </div>
    );
  }
}

export default Home;
