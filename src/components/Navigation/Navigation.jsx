import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

import Logo from "../../assets/logo-sportsee.svg";

/**
 * Coponent for the main navigation
 */
function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Logo SportSee" className="main-nav__logo"></img>
      </Link>
      <div className="main-nav">
        <Link to="/" className="main-nav__link">
          Accueil
        </Link>
        <Link to="/" className="main-nav__link">
          Profil
        </Link>
        <Link to="/" className="main-nav__link">
          Réglage
        </Link>
        <Link to="/" className="main-nav__link">
          Communauté
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
