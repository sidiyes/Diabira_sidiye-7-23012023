import React from "react";
import "./Footer.css";
import Footer__logo from "../../images/footer_logo.svg";

function Footer() {
  return (
    <footer>
      <img src={Footer__logo} alt="logo kasa" />
      <p className="copyright">&copy; 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
