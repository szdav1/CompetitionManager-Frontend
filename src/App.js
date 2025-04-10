import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetCompetitor from "./components/Competitors/GetCompetitor";
import style from "./App.css";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import GetCompetition from "./components/Competition/GetCompetition.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/get-placements" element={<GetCompetitor />} />
                <Route path="/about" element={<About />} />
                <Route path="/get-competition" element={<GetCompetition />} />
            </Routes>
        </Router>
    );
}

export default App;
