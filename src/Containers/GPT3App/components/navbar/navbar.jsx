import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import { SignUpForm } from "../componentExports.jsx";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navlinks = (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Blogs</a>
      </p>
    </>
  );

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo not found" />
        </div>

        <div className="gpt3__navbar-links_container">{navlinks}</div>
      </div>

      <div>
        <form className="gpt3__navbar-sign">
          <p>Sign In</p>
          <Link to="/SignUpForm">
            <button type="button">Sign Up</button>
          </Link>
        </form>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">{navlinks}</div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <Link to="/SignUpForm">
                <button type="button">Sign Up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
