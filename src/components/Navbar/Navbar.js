import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Home</Link>
            <Link to="/about" style={{ textDecoration: "none", color: "blue" }}>About</Link>
            <Link to="/get-competitor" style={{ textDecoration: "none", color: "blue" }}>Get Competitor</Link>
        </nav>
    );
}
export default Navbar;