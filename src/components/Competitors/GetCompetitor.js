import axios from "axios";
import React,  { useState, useEffect}  from "react";
import { Modal, Select } from "@mui/material";
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
            if(competitor.name === stateName  && competitor.club === stateClub){
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
        if(stateName === "" || stateClub === ""){
            alert("Kérem töltse ki a mezőket!");
        }
        else{
            await fetchAllCompetitor();
            filterCompetitorByName();
            await getCompetitorPlacementsById();
            handleClose();
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <ListPlacements placements={statePlacements}/>
                <br />
                
                <Modal open={open} onClose={handleClose}>
                    <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5}}>
                        <Select
                            fullWidth
                            native
                            value={stateName}
                            onChange={(event) => setStateName(event.target.value)}
                        >
                            <option value="" disabled>Select Competitor</option>
                            {stateCompetitors && stateCompetitors.map((competitor) => (
                                <option key={competitor.id} value={competitor.name}>
                                    {competitor.name}
                                </option>
                            ))}
                        </Select>
                        <Select
                            fullWidth
                            native
                            value={stateClub}
                            onChange={(event) => setStateClub(event.target.value)}
                        >
                            <option value="" disabled>Select Club</option>
                            {stateCompetitors && [...new Set(stateCompetitors.map((competitor) => competitor.club))].map((club, index) => (
                                <option key={index} value={club}>
                                    {club}
                                </option>
                            ))}
                        </Select>
                        <br />
                        <Button 
                            variant="contained" 
                            startIcon={<SearchIcon />}  
                            onClick={ async () => {
                                await clickQuery();
                            }}
                            sx={{ backgroundColor: "black", color: "white" }}
                        >
                            Query
                        </Button>
                        <br />
                        <Button 
                            variant="contained" 
                            color="error" 
                            onClick={handleClose}
                            sx={{ backgroundColor: "black", color: "white" }}
                        >
                            Close
                        </Button>
                        
                    </Box>
                </Modal>
            </div>
            <div style={{alignSelf: "center", marginBottom: "20px", display: "flex", justifyContent: "center"}}>
                <Button 
                    variant="contained" 
                    startIcon={<AddIcon />} 
                    onClick={handleOpen}
                    sx={{ backgroundColor: "black", color: "white" }}
                >
                    Get Competitor
                </Button>
            </div>
        </div>
    );
}
export default GetCompetitor;