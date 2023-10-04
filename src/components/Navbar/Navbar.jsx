import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.styles.scss";

function Navbar() {
  return (
    <nav className="nav-bar-container">
      <Link to="/" className="home-app navlinks">
        Home
      </Link>
      <Link to="/GPT3App" className="gpt3-app navlinks">
        GPT3
      </Link>
      <Link to="/MonsterApp" className="monster-app navlinks">
        Monster Rolodex
      </Link>
    </nav>
  );
}

export default Navbar;
