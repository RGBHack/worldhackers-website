import React from "react";
import "./App.css";

import WorldNav from "./components/WorldNav";
import Hackathons from "./components/Hackathons";
import Projects from "./components/Projects";
import Team from "./components/Team";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <WorldNav />
      <div className="box" id="hackathons">
        <Hackathons />
      </div>
      <div className="box" id="projects">
        <Projects />
      </div>
      <Team />
    </div>
  );
}

export default App;
