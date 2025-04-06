import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import HomeIcon from '@mui/icons-material/Home'; 
function Navbar() {
    return (
        <nav>
            <Link to="/" style={{ color: "white", textDecoration: "none", padding: "1vh" }}><a><HomeIcon/></a></Link>
            <Link to="/get-placements" style={{color: "white", textDecoration: "none", padding: "1vh"}}><a>Get Placements</a></Link>
            <Link to="/get-competition" style={{color: "white", textDecoration: "none", padding: "1vh"}}><a>Get Competition</a></Link>
            <Link to="/about" style={{ color: "white", textDecoration: "none", padding: "1vh"}}><a>About</a></Link>
            <footer className={style.footer} style={{marginTop:"auto", marginBottom:"1vh"}}>
                <p>2025 &copy; All rights reserved</p>
            </footer>
        </nav>
    );
}
export default Navbar; 