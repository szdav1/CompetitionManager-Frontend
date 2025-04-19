import React from "react";
import style from "./About.module.css";
function About() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>About</h1>
      <p>Developed by: 2+1 team &copy;.</p>
    </div>
  );
}

export default About;
