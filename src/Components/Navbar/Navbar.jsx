import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Navbar.css";
// import { NavHashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  // showSettings (event) {
  //   event.preventDefault();
  // }

  return (
    <Menu width={"auto"}>
      <a id="about" className="menu-item" href="/Pediatric">
        Pediatric
      </a>
      <a id="contact" className="menu-item" href="/GYN">
        GYN
      </a>
      <a id="contact" className="menu-item" href="/PHY">
        PHY
      </a>
      <a id="contact" className="menu-item" href="/SUR">
        SUR
      </a>

      {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    </Menu>
  );
};

export default Navbar;
