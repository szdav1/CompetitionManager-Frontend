import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function About() {
    return (
        <div sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", textAlign: "center" }}>
            <h1>About</h1>
            <p>This is the About page.</p>
        </div>
    );
}

export default About;