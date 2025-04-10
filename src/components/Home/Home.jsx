import React, { use } from 'react';
import style from "./Home.module.css";
import Fade from "react-bootstrap/Fade";
import InfoIcon from '@mui/icons-material/Info';
import { Info } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Home(){
    const [open, setOpen] = useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", textAlign: "center"}}>
            <h1 className="line">Home</h1>
            <hr style={{ width: "50%", height: "2px", backgroundColor: "white", border: "none" }} />
                    <div>
                        <h2 className="line">Information</h2>
                        <p>This is the home page of the CompetitionManager's website.</p>
                        <p>You can query there all of the competitors and competitions, with placements.</p>
                        <p>You can find all of the functionalities in the left menu.</p>
                        <p>Have a nice day!</p>
                    </div>
            <hr style={{ width: "50%", height: "2px", backgroundColor: "white", border: "none" }} />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", textAlign: "center"}}>
                        <h2 className="line">How to use?</h2>                        
                        <div class="info" style={{ backgroundColor: "#5B7C99", borderRadius: 5, padding: 20, width: "80%", marginBottom: 20, textAlign: "center"}}>
                        <h3 style={{color: 'black'}}>Get Competitor</h3>
                        <ArrowDownwardIcon style={{color: 'black'}}/>
                        <p>If you want to search after a competitor's results, you should click the sidebar's <p style={{color: "black"}}>"Get Competitor"</p> menu point.</p>
                        <p>Then you can select the competitor's name and club.</p>
                        <p>After that you should click the <p style={{color: "black"}}>"Query"</p> button.</p>
                        </div>
                        <div class="info" style={{ backgroundColor: "#5B7C99", borderRadius: 5, padding: 20, width: "80%", marginBottom: 20, textAlign: "center"}}>
                        <h3 style={{color: 'black'}}>Get Competitions</h3>
                        <ArrowDownwardIcon style={{color: 'black'}}/>
                        <p>If you want to search after a competition's results, you should click the sidebar's <p style={{color: "black"}}>"Get Competitions"</p> menu point.</p>
                        <p>Then you can search by the competitions name.</p>
                        <p>After that you should click the <p style={{color: "black"}}>"Search"</p> button.</p>
                        <p>If you dont type in a name, you will get all of the competitions.</p>
                        </div>
                        </div>
                        
            <hr style={{ width: "50%", height: "2px", backgroundColor: "white", border: "none" }} />
        </div>
    );
}
export default Home;