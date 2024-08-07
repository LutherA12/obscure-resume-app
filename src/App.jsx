import "./App.styles.scss";
import { Navbar } from "./components/componentExports.jsx";
import { React } from "react";

export default function App() {
  return (
    <>
      <div className="main-app">
        <Navbar />
      </div>
    </>
  );
}

/*

import { GPT3App, MonsterApp } from "./Containers/ContainerExports";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/componentExports.jsx";

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/GPT3App" element={<GPT3App />} />
        <Route path="/MonsterApp" element={<MonsterApp />} />
      </Routes>

<Route path="/CrownApp" element={<CrownApp />} />

*/
