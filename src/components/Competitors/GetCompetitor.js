import axios from "axios";
import React, { useState, useEffect, use } from "react";
import { Modal } from "@mui/material";
import style from "./GetCompetitor.module.css";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { set } from "react-hook-form";
import Alert from "@mui/material/Alert"
import ListPlacements from "../ListPlacements/ListPlacements";

function GetCompetitor(){
    
    let [stateCompetitors, setStateCompetitors] = useState(null);
    const [open, setOpen] = useState(false);
    // const [stateId, setStateId] = useState("");
    const [stateName, setStateName] = useState("");
    const [stateClub, setStateClub] = useState("");
    const [stateBirthDate, setStateBirthDate] = useState("");
    let [stateCompetitor, setStateCompetitor] = useState(null);
    let [statePlacements, setStatePlacements] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const fetchAllCompetitor = async () =>{
        let response = await axios.get("/api/competitor/").catch((error) => {alert("Kérem indítsa el a szervert!")});
            setStateCompetitors(response.data);
       
        
    }
    useEffect(() => {
            fetchAllCompetitor();
    }, [])
    const filterCompetitorByName = () =>{
        stateCompetitors.map((competitor) => {
            if(competitor.name === stateName  && competitor.club === stateClub && competitor.birthDate === stateBirthDate){
                stateCompetitor = competitor;
                setStateCompetitor(stateCompetitor);
            }
        })
    }
    const getCompetitorPlacementsById = async () =>{
        let response = await axios.get(`/api/placements/${stateCompetitor.id}`).catch((error) => {alert("Kérem indítsa el a szervert!")});
        statePlacements = response.data;
        setStatePlacements(statePlacements);
    }
    const clickQuery = async () =>{
        try{
        handleClose();
        await fetchAllCompetitor();
        filterCompetitorByName();
        await getCompetitorPlacementsById();
    }
    catch(error){
        alert("Nem sikerült a versenyzők lekérdezése!");
    }
}

  


    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <ListPlacements placements={statePlacements}/>
                <br />
                
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5}}>
                        <TextField required id="outlined-basic" label="Name" variant="outlined" value={stateName} onChange={(e) => setStateName(e.target.value)} />
                        <TextField required id="outlined-basic" label="Club" variant="outlined" value={stateClub} onChange={(e) => setStateClub(e.target.value)} />
                        <TextField required id="outlined-basic" label="Birth Date" variant="outlined" value={stateBirthDate} onChange={(e) => setStateBirthDate(e.target.value)} />
                        <br />
                        <Button variant="contained" startIcon={<SearchIcon />}  onClick={ async () => {
                            await clickQuery();
                            console.log(statePlacements);
                        }}>Query</Button>
                        <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
                        <Alert severity="info">Please fill out the fields!</Alert>
                    </Box>
                </Modal>
            </div>
            <div style={{alignSelf: "center", marginBottom: "20px"}}>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>Get Competitor</Button>
            </div>
        </div>
    );
}
export default GetCompetitor;