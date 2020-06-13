import React from "react";
import "./styles.css";
import { slide as Menu } from "react-burger-menu";
// https://github.com/negomi/react-burger-menu

const MobileNavbar = () => {
  return (
    // NOTE: replace a tags with Link tags (import from react-router-dom)
    // after wrapping App in Router.
    // track open state with isOpen prop
    // TODO: Use <Link to="route">_title_</Link>
    <Menu slide width={"350px"}>
      <a id="contents" className="menu-item" href="/">
        CONTENTS
      </a>
      <a id="events" className="menu-item" href="/about">
        EVENTS
      </a>
      <a id="shop" className="menu-item" href="/contact">
        SHOP
      </a>
      <a id="about" className="menu-item" href="/">
        ABOUT
      </a>
    </Menu>
  );
};

export default MobileNavbar;
