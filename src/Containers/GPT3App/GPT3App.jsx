import "./GPT3App.scss";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers/containerExports";
import { Cta, Brand, Navbar } from "./components/componentExports";
import { Fragment } from "react";

function GPT3App() {
  return (
    <Fragment>
      <div className="GPT3-App-container">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </Fragment>
  );
}

export default GPT3App;

/*

      <div>
        <Routes>
          <Route path="/Gpt3Article" element={<Gpt3Article />} />
          <Route path="/AiDangerArticle" element={<AiDangerArticle />} />
          <Route path="/BreakingArticle" element={<BreakingArticle />} />
          <Route path="/DataArticle" element={<DataArticle />} />
          <Route path="/PointArticle" element={<PointArticle />} />
        </Routes>
      </div>

*/
