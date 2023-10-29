import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

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
        <DialogTitle>{header && header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="error">{disagreeLabel}</Button>
          <Button onClick={handleSave} color="success">{agreeLabel}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomeAlertDialog;
