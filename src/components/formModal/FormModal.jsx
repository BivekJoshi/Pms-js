import React from 'react';
import { Box, Modal } from '@mui/material';
import { useTheme } from '@emotion/react';

const FormModal = ({ open, onClose, formComponent, sx }) => {
  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #808080",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    background: theme.palette.background.default,
    color: theme.palette.common,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      // sx={sx}
    >
      <Box sx={style}>{formComponent}</Box>
    </Modal>
  );
};

export default FormModal;
