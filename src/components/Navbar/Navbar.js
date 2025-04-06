import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import HomeIcon from '@mui/icons-material/Home'; 
function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}><HomeIcon/></Link>
            <Link to="/get-competitor" style={{ textDecoration: "none", color: "blue" }}>Get Competitor</Link>
            <Link to="/about" style={{ textDecoration: "none", color: "blue"}}>About</Link>
            <Link to="/get-competition" style={{ textDecoration: "none", color: "blue"}}>Get Competition</Link>
        </nav>
    );
}
export default Navbar;