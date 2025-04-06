import React from 'react';
import style from "./Home.module.css";
function Home(){
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", textAlign: "center"}}>
            <h1>Home</h1>
            <p>This is the home page.</p>
        </div>
    );
}
export default Home;