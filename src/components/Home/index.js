import React, { Component } from "react";
import Logo from "../Logo";
import "./styles.css";
import girlSing from "../../girl_sing.jpg";
import Carousel from "./components/Carousel";
import Post from "../../components/Post";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">
        {/* <Logo picture={keenLogo} /> */}
        <Carousel />
        <Post title="FIRST POST" picture={girlSing} />
      </div>
    );
  }
}

export default Home;
