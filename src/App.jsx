import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use 'Router', 'Routes', and 'Route'

import Process from "./components/Process";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Origin from "./components/Origin";
import Advantage from "./components/Advantage";
import Case from "./components/Case";
import Sustain from "./components/Sustain";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/origin" element={<Origin />} />
        <Route path="/process" element={<Process/>}/>
        <Route path="/advantages" element={<Advantage/>}/>
        <Route path="/sustainability" element={<Sustain/>}/>
        <Route path="/case-studies" element={<Case/>}/>
      </Routes>
    </Router>
  );
};

export default App;
