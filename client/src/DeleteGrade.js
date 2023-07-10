import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteGrade } from './api';

const DeleteGrade = ({isOpen, onClose, selectedUser, fetchGrades}) => {
  const onSubmit = () => {
    deleteGrade(selectedUser.id).then(() => {
      fetchGrades();
      onClose();
    })
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Delete Grade</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Are you sure you want to delete the grade for user ${selectedUser.username}?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: "16px 24px" }}>
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button onClick={onSubmit} variant="contained" color='error'>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteGrade;