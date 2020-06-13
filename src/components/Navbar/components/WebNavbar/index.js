import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../../Logo";
import "./styles.css";
import keenLogo from "../../../../keen_logo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <div className="navbar-logo">
          <Logo picture={keenLogo} />
        </div> */}
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="#">CONTENT</Link>
            </li>
            <li>
              <Link to="#">EVENTS</Link>
            </li>
            {/* <li><a href="#">EVENTS</a></li> */}
            <li>
              <Link to="#">SHOP</Link>
            </li>
            <li>
              <Link to="#">ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
