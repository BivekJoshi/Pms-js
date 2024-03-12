import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
} from "@mui/material";

const DeleteConfirmationModal = ({
  open,
  handleCloseModal,
  handleConfirmDelete,
  isLoading,
  message,
}) => {

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <Box>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this {message}?
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleConfirmDelete}>
          Confirm
          </Button>
           <Button onClick={handleCloseModal}>
Cancel
           </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
