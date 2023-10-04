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

function GPT3App() {
  return (
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
  );
}

export default GPT3App;
