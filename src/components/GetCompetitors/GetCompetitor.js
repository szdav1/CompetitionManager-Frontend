import axios from "axios";
import React, { useState, useEffect, use } from "react";
import { Modal, unstable_createMuiStrictModeTheme } from "@mui/material";
import style from "./GetCompetitor.module.css";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { set } from "react-hook-form";
import ListPlacements from '../ListPlacements/ListPlacements.js'

function GetCompetitor(){
    
    let [stateCompetitors, setStateCompetitors] = useState([]);
    let [open, setOpen] = useState(false);
    let [stateId, setStateId] = useState("");
    let [stateName, setStateName] = useState("");
    let [stateClub, setStateClub] = useState("");
    let [stateBirthDate, setStateBirthDate] = useState("");
    let [stateCompetitor, setStateCompetitor] = useState(
        {
            "name": "",
            "club": "",
            "birthDate": ""
        }
    );
    let [statePlacement, setStatePlacement] = useState(
        [{
            "competitorName": "",
            "competitionName": "",
            "competitionLocation": "",
            "competitionDate": "",
            "competitorPlacement": ""
          }]
    );

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchAllCompetitor = () =>{
        axios.get("/api/competitor/")
        .then(response => {
            stateCompetitors = response
            setStateCompetitors(response.data);
        })
        
    }

    fetchAllCompetitor();

    const filterCompetitorByName = () =>{
        stateCompetitors.map((competitor) => {
            if(competitor.name === stateName){
                stateCompetitor = competitor;
                setStateCompetitor(stateCompetitor);
            }
        })
    }

    const getCompetitorPlacementsById = () =>{
        axios.get(`/api/placements/${stateCompetitor.id}`).then(response => {
            statePlacement = response.data;
            setStatePlacement(statePlacement);
        })
    }

  
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Get your placements here</h1>
            <ListPlacements placements={statePlacement}/>
            <br/>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>Get Competitor</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={stateName} onChange={(e) => setStateName(e.target.value)} />
                    {/* <TextField id="outlined-basic" label="Club" variant="outlined" value={club} onChange={(e) => setStateClub(e.target.value)} />
                    <TextField id="outlined-basic" label="Birth Date" variant="outlined" value={birthDate} onChange={(e) => setStateBirthDate(e.target.value)} /> */}
                    <br />
                    <Button variant="contained" startIcon={<SearchIcon />} onClick={() => {
                        handleClose();
                        fetchAllCompetitor();
                        filterCompetitorByName();
                        getCompetitorPlacementsById();
                    }}>Query</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
export default GetCompetitor;