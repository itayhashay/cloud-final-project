import React,{ useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import DeleteGrade from './DeleteGrade';
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "burlywood",
    color: "black",
    fontWeight: "600"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "rgb(254 242 191 / 48%)",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const UsersGrades = ({grades, fetchGrades}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const handleClickOpen = (user) => {
        setSelectedUser(user)
        setIsDeleteModalOpen(true);
    };

    useEffect(() => {
      fetchGrades();
    }, []);
    
  return (
    <React.Fragment>
    <TableContainer component={Paper} sx={{ width: "100%", height: "fit-content" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Student Id</StyledTableCell>
            <StyledTableCell align="left">Student Name</StyledTableCell>
            <StyledTableCell align="left">Grade</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grades.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell align="left">{user.userId}</StyledTableCell>
              <StyledTableCell align="left">{user.username}</StyledTableCell>
              <StyledTableCell align="left">{user.grade}</StyledTableCell>
              <StyledTableCell align="left" width="1px">
                <IconButton aria-label="delete" color="inherit" onClick={() => handleClickOpen(user)}>
                    <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <DeleteGrade isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} selectedUser={selectedUser} fetchGrades={fetchGrades}/>
    </React.Fragment>
  );
}

export default UsersGrades;