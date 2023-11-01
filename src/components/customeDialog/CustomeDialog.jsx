import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomeAlertDialog = (props) => {
  const {
    isModalOpen,
    handleModalClose,
    handleAgree,
    agreeLabel,
    disagreeLabel,
    content,
    header,
  } = props;

  const handleSave = () => {
    handleAgree();
    handleModalClose();
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleModalClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h5">{header && header}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="error" variant="contained">
            {disagreeLabel}
          </Button>
          <Button onClick={handleSave} color="success" variant="contained">
            {agreeLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomeAlertDialog;
