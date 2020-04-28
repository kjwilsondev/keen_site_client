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
          <li>NEW</li>
          <li>MUSIC</li>
          <li>SHOP</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
        </div>
      </div>
    );
  }
}

export default Navbar;
