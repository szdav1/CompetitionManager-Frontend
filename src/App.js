import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetCompetitor from "./components/Competitors/GetCompetitor";
import style from "./App.module.css";
import About from "./components/About/About.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import GetCompetition from "./components/Competition/GetCompetition.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/get-competitor" element={<GetCompetitor />} />
                <Route path="/about" element={<About />} />
                <Route path="/get-competition" element={<GetCompetition />} />
            </Routes>
        </Router>
    );
}

export default App;
