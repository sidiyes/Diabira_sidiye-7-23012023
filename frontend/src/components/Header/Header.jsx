import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="nav">
        <Link className="nav__link" to="/">
          Accueil
        </Link>
        <Link className="nav__link" to="/about">
          À Propos
        </Link>
      </div>
    </header>
  );
}

export default Header;
