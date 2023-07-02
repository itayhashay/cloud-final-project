import { Box, Button, Typography } from "@mui/material";
import UsersGrades from "./UsersGrades";
import GradingIcon from '@mui/icons-material/Grading';
import { useState } from "react";
import AddGrade from "./AddGrade";

const containerStyle = {
    width: "45vw",
    height: "60vh",
    display: "flex",
    justifyContent: "flex-start",
    background: "#f3f3f3",
    alignItems: "flex-start",
    borderRadius: "20px",
    border: "1px solid #c8c8c8",
    flexDirection: "column",
    padding: "33px",
    boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.16)"
}

const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickOpen = () => {
        setIsModalOpen(true);
    };

    return (
        <Box sx={containerStyle}>
            <Box display="flex" flexDirection="row" justifyContent={"space-between"} width={"100%"}>
                <Box sx={{ display: "flex", flexDirection: "row", mb: "24px" }}>
                    <GradingIcon fontSize="large" sx={{ mr: "16px" }}/>
                    <Typography fontSize="24px">
                        Users Grades
                    </Typography>
                </Box>
                <Button variant="contained" color="success" sx={{ height: "fit-content" }} onClick={handleClickOpen}>Add +</Button>
            </Box>
            <UsersGrades />
            <AddGrade isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </Box>
    );
}
 
export default Content;