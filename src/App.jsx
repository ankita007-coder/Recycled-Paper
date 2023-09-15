import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use 'Router', 'Routes', and 'Route'

import NavbarC from "./components/NavbarC";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Origin from "./components/Origin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/origin" element={<Origin />} />
      </Routes>
    </Router>
  );
};

export default App;
