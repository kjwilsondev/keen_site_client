import React, { Component } from "react";
import Logo from "../Logo";
import "./styles.css";
import keenLogo from "../../keen_logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Logo picture={keenLogo} />
        </div>
        <div className="navbar-items">
          <ul>
            <li><a href="#">ALL</a></li>
            <li><a href="#">MUSIC</a></li>
            <li><a href="#">SHOP</a></li>
            {/* <li><a href="#">EVENTS</a></li> */}
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
