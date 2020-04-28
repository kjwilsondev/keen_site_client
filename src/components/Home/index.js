import React, { Component } from "react";
import Logo from "../Logo";
import "./styles.css";
import keenLogo from "../../keen_logo.png";

class Home extends Component {
  render() {
    return (
      // const { title, date, picture, excerpt, link }
      <div className="home">{/* <Logo picture={keenLogo} /> */}</div>
    );
  }
}

export default Home;
