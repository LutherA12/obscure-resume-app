import "./App.styles.scss";
import { Navbar, Homepage } from "./components/componentExports.jsx";
import { GPT3App, MonsterApp } from "./Containers/ContainerExports";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/GPT3App" element={<GPT3App />} />
        <Route path="/MonsterApp" element={<MonsterApp />} />
      </Routes>
    </div>
  );
}

export default App;
