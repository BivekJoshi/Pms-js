import React from "react";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";

const FormModal = ({
  open,
  onClose,
  formComponent,
  sx,
  width,
  bgcolors,
  header,
}) => {
  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : "-webkit-fill-available",
    border: "1px solid #808080",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    background: bgcolors ? bgcolors : theme.palette.background.alt,
    color: theme.palette.common,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={sx}
    >
      <Box sx={style}>
        {header && (
          <>
            <Grid container direction="row" justifyContent="space-between">
              <Typography variant="h4">
                <b>{header}</b>
              </Typography>
              <Button onClick={onClose}>
                <CloseIcon />
              </Button>
            </Grid>
            <Divider />
          </>
        )}
        {formComponent}
        <Grid container direction="row" justifyContent="flex-end" gap="1rem">
          <Button variant="contained">Addd</Button>
          <Button variant="contained">CloseButton</Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default FormModal;
