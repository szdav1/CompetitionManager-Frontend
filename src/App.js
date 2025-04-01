import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetCompetitor from "./components/Competitors/GetCompetitor";
import style from "./App.module.css";
import About from "./components/About/About.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Welcome to the Competition Manager</h1>} />
                <Route path="/about" element={<About />} />
                <Route path="/get-competitor" element={<GetCompetitor />} />
            </Routes>
        </Router>
    );
}

export default App;
