import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import List from "./views/list";
import Home from "./views/Home";
import Population from "./views/population";
import Lang from "./views/lang";

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <ul className="navbar">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/list">List</Link>
          </li>
          <li className="nav-link">
            <Link to="/population">Population</Link>
          </li>
          <li className="nav-link">
            <Link to="/lang">Languages</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home title="Home Page" />} />
        <Route
          path="/list"
          element={<List title="List of all avaiable countries" />}
        />{" "}
        <Route path="/population" element={<Population />} />
        <Route path="/lang" element={<Lang />} />
      </Routes>
    </Router>
  );
}
