import { React } from "react";
import { AppClass } from "./components/componentExports.jsx";
import "./App.css";

function MonsterApp() {
  return (
    <div>
      <section className="AppSection">
        <AppClass />
      </section>
    </div>
  );
}

export default MonsterApp;
