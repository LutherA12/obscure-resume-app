import { React, Fragment } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { GPT3App, MonsterApp } from "../../Containers/ContainerExports.jsx";
import {
  Gpt3Article,
  AiDangerArticle,
  BreakingArticle,
  DataArticle,
  PointArticle,
} from "../../../src/Containers/GPT3App/components/componentExports.jsx";
import { Homepage } from "../componentExports";
import "./Navbar.styles.scss";

function Navbar() {
  return (
    <Fragment>
      <nav className="nav-bar-container">
        <Link to="/" className="home-app navlinks">
          Home
        </Link>
        <Link to="/GPT3App/*" className="gpt3-app navlinks">
          GPT3
        </Link>
        <Link to="/MonsterApp" className="monster-app navlinks">
          Monster Rolodex
        </Link>
        <Link to="/CrownApp" className="crown-app navlinks">
          Crown Clothing
        </Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/GPT3App/*" element={<GPT3App />} />
          <Route path="/MonsterApp" element={<MonsterApp />} />
          <Route path="/Gpt3Article" element={<Gpt3Article />} />
          <Route path="/AiDangerArticle" element={<AiDangerArticle />} />
          <Route path="/BreakingArticle" element={<BreakingArticle />} />
          <Route path="/DataArticle" element={<DataArticle />} />
          <Route path="/PointArticle" element={<PointArticle />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default Navbar;

/*

  Gpt3Article,
  AiDangerArticle,
  BreakingArticle,
  DataArticle,
  PointArticle,

      <Link to="/CrownApp" className="crown-app navlinks">
        Crown Clothing
      </Link>

*/
