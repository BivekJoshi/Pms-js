import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

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
    alertTitle,
    confirmhead,
  } = props;

  const handleSave = () => {
    handleAgree();
    handleModalClose();
  };

  return (
    <Dialog
      open={isModalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleModalClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        sx={{ display: "flex", justifyContent: "center", color: "#FF544E" }}
      >
        <DeleteOutlineOutlinedIcon
          sx={{
            backgroundColor: "#FFDDDC",
            borderRadius: "50%",
            fontSize: 36,
            // padding: "1rem",
          }}
        />
      </DialogTitle>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 400 }}>
          <b>{alertTitle}</b>
        </Typography>
      </DialogTitle>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h5">{header && header}</Typography>
      </DialogTitle>
      <DialogTitle
        sx={{
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          marginTop: "0",
        }}
      >
        <Typography variant="h5">{confirmhead}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleModalClose}
          color="success"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          {agreeLabel}
        </Button>
        <Button
          onClick={handleSave}
          color="error"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          {disagreeLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomeAlertDialog;
