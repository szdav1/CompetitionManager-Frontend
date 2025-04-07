import { use } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import style from "./GetCompetition.module.css";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import ListCompetitions from "../ListCompetitions/ListCompetitions.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { set } from "react-hook-form";
function GetCompetition() {
    let [stateCompetitions, setStateCompetitions] = useState([]);
    let [stateCompetitor, setStateCompetitor] = useState([]);
    const [stateName, setStateName] = useState("");
    let [statePlacements, setStatePlacements] = useState([]);
    const fetchAllCompetitions = async () => {
        let response = await axios.get("/api/competition/").catch((error) => { alert("Kérem indítsa el a szervert!") });
        const competitions = await response.data;
        setStateCompetitions(competitions);
    }
    const fetchAllCompetitors = async () => {
        let response = await axios.get("/api/competitor/").catch((error) => { alert("Kérem indítsa el a szervert!") });
        const competitors = await response.data;
        setStateCompetitor(competitors);
        
        
    }

    const fetchAllPlacements = async () => {
      try {
        const placementPromises = stateCompetitor.map(async (competitor) => {
          const response = await axios.get(`/api/placements/${competitor.id}`);
          return response.data;
        });
    
        const allPlacements = await Promise.all(placementPromises);
        const flattened = allPlacements.flat();
        setStatePlacements(flattened);
      } catch (error) {
        alert("Nem sikerült a helyezések lekérdezése!");
      }
    };
    
    const clickQuery = async () => {
      try{
        await fetchAllCompetitions();
        await fetchAllCompetitors();
        await fetchAllPlacements();
      }
      catch(error){
        alert("Nem sikerült a versenyzők lekérdezése!");
      }
    }
    useEffect(() => {
      if (stateCompetitor.length > 0) {
        fetchAllPlacements();
      }
    }, [stateCompetitor]);
  
    
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <TextField 
          label="Verseny neve" 
          id="filled-basic" 
          variant="filled" 
          onChange={(event) => setStateName(event.target.value)} 
          InputLabelProps={{
            style: { color: "white" }
          }}
          InputProps={{
            style: { color: "white" }
          }}
          sx={{
            "& .MuiFilledInput-root": {
              "&:before": {
                borderBottom: "2px solid black"
              },
              "&:hover:before": {
                borderBottom: "2px solid black"
              },
              "&.Mui-focused:before": {
                borderBottom: "2px solid black"
              },
              "&:after": {
                borderBottom: "2px solid black"
              }
            }
          }}
        />
      </div>
      <ListCompetitions 
        placement={statePlacements.filter((placement) => 
          placement.competitionName.toLowerCase().includes(stateName.toLowerCase())
        )} 
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button 
          variant="contained" 
          onClick={async () => { await clickQuery() }} 
          style={{ backgroundColor: "black", color: "white" }}
        >
          Keresés
        </Button>
      </div>
    </div>
  );
}

export default GetCompetition;
