import React from "react";
import "./styles.css";
import Logo from "../Logo";
import keenLogo from "../../keen_logo.png";
import MobileNavbar from "./components/MobileNavbar";
import WebNavbar from "./components/WebNavbar";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      height: 0,
      mobileMenuIsOpen: false,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div>
        <div className="navbar-logo">
          <Logo picture={keenLogo} />
        </div>
        {this.state.width < 450 ? <MobileNavbar /> : <WebNavbar />}
      </div>
    );
  }
}

export default Navbar;
