import React from "react";

import Footer_Logo from "../images/footer_logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={Footer_Logo} alt="" className="footer__logo" />
      <p className="footer__text">&copy; 2022 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
