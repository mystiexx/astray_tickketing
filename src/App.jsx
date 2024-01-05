import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/home";
import About from "./app/about";
import Terms from "./app/terms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/terms" exact element={<Terms />} />
      </Routes>
    </Router>
  );
};

export default App;
