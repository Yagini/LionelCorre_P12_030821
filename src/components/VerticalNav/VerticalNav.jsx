import React from "react";
import { Link } from "react-router-dom";

import "./VerticalNav.css";

import BikingIcon from "../../assets/nav-icons/icon-biking.svg";
import MuscuIcon from "../../assets/nav-icons/icon-muscu.svg";
import SwimmingIcon from "../../assets/nav-icons/icon-swiming.svg";
import YogaIcon from "../../assets/nav-icons/icon-yoga.svg";

function VerticalNavigation() {
  return (
    <nav className="vertical-nav">
      <Link to="/">
        <img src={YogaIcon} alt="Yoga icon" className="vertical-nav__icon"></img>
      </Link>
      <Link to="/">
        <img src={SwimmingIcon} alt="Swimming icon" className="vertical-nav__icon"></img>
      </Link>
      <Link to="/">
        <img src={BikingIcon} alt="Biking icon" className="vertical-nav__icon"></img>
      </Link>
      <Link to="/">
        <img src={MuscuIcon} alt="Muscu icon" className="vertical-nav__icon"></img>
      </Link>
      <div>
        <p className="vertical-nav__copyright">Copyright, SportSee 2020</p>
      </div>
    </nav>
  );
}

export default VerticalNavigation;
