import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          <PageLinks pageLinks={pageLinks} classType="nav-link" />
        </ul>

        <ul className="nav-icons">
          <SocialLinks classType="nav-icon" socialLinks={socialLinks} />
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
