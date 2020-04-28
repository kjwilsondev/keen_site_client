import React, { Component } from "react";
import { Link } from "react-router-dom";
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
<<<<<<< HEAD
          <li>
            <a>NEW</a>
          </li>
          <li>MUSIC</li>
          <li>SHOP</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
=======
          <ul>
            <li><Link to="#">ALL</Link></li>
            <li><Link to="#">MUSIC</Link></li>
            <li><Link to="#">SHOP</Link></li>
            {/* <li><a href="#">EVENTS</a></li> */}
            <li><Link to="#">CONTACT</Link></li>
          </ul>
>>>>>>> c3be5c8114bbbb3ec1944576e678538089394ffc
        </div>
      </div>
    );
  }
}

export default Navbar;
