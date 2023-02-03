import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.svg";

function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Link className="nav__link" to="/">
        Accueil
      </Link>
      <Link className="nav__link" to="/about">
        À Propos
      </Link>
    </nav>
  );
}

export default Header;
