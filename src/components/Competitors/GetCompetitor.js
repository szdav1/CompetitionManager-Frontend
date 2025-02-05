import axios from "axios";
import React, { useState, useEffect, use } from "react";
import { Modal } from "@mui/material";
import style from "./GetCompetitor.module.css";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
function GetCompetitor(){
    const [competitor, setCompetitor] = useState(null);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    const fetchCompetitor = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/competitor/${id}`);
            setCompetitor(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching competitor:", error);
        }
    };

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>Get Competitor</Button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 5}}>
                    <TextField id="outlined-basic" label="Competitor ID" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} />
                    <br />
                    <Button variant="contained" startIcon={<SearchIcon />} onClick={() => {
                        fetchCompetitor(id);
                        handleClose();
                    }}>Query</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
export default GetCompetitor;