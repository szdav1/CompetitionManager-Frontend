import { use } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import style from "./GetCompetition.module.css";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import ListCompetitions from "../ListCompetitions/ListCompetitions.js";
import Button from "@mui/material/Button";

function GetCompetition() {
    const [stateCompetitions, setStateCompetitions] = useState([]);
    const [stateCompetitor, setStateCompetitor] = useState(null);
    const [stateName, setStateName] = useState("");
    const [open, setOpen] = useState(false);
    
    const fetchAllCompetitors = async () => {
        let response = await axios.get("/api/competitor/").catch((error) => { alert("Kérem indítsa el a szervert!") });
        setStateCompetitor(response.data);
    }

    const fetchAllCompetitions = async () => {
        let response = await axios.get("/api/competition/").catch((error) => { alert("Kérem indítsa el a szervert!") });
        setStateCompetitions(response.data);
    }
    useEffect(() => {
        fetchAllCompetitions();
    }, [])
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
  
  
  return (
    <div>
      <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center",  gap: "10px"}}>
      <ListCompetitions competitions={stateCompetitions} />
      <div style={{alignSelf: "center", marginBottom: "20px"}}>
        <Button variant="contained" onClick={handleOpen}>Open Query Modal</Button>
      </div>
      <Modal open={open} onClose={handleClose}>
      <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5}}>
        <Select>
          {stateCompetitions &&
            stateCompetitions.map((competition) => (
              <MenuItem key={competition.id} value={competition.id}>
                {competition.name}
              </MenuItem>
            ))}
        </Select>
        <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
        <Button variant="contained" onClick={handleClose}>Submit</Button>
      </Box>
      </Modal>
      </div>
    </div>
  );
}

export default GetCompetition;
