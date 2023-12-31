import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
import { addNewGrade } from "./api";

const AddGrade = ({isOpen, onClose, fetchGrades}) => {
    const [username, setusername] = useState("");
    const [grade, setGrade] = useState();

    const initForm = () => {
        setusername("")
        setGrade(undefined);
    }

    const onSubmit = () => {
        addNewGrade({userId: 123456789, username, grade}).then(() => {
            initForm();
            fetchGrades();
            onClose();
        })
    }

    return (
        <div>
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Add New Grade</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Write down the student's full name and give him a grade straight from the heart.
            </DialogContentText>
            <TextField
                margin="dense"
                label="Student Name"
                type="text"
                fullWidth
                required
                variant="standard"
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Grade"
                type="number"
                fullWidth
                required
                variant="standard"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}          
                value={grade}
                onChange={(e) => setGrade(e.target.value)}        
            />
            </DialogContent>
            <DialogActions sx={{ padding: "16px 24px" }}>
            <Button onClick={onClose} color="inherit">Cancel</Button>
            <Button onClick={onSubmit} variant="contained" color="success">Add</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default AddGrade;