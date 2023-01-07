import React from "react";
import { socialLinks, pageLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <PageLinks pageLinks={pageLinks} classType="footer-link" />
      </ul>
      <ul className="footer-icons">
        <SocialLinks socialLinks={socialLinks} classType="footer-icon" />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
