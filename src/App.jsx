import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/home";
import About from "./app/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
