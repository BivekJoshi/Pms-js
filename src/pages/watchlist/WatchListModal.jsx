import { Box, MenuItem, Popover, Typography, useTheme } from "@mui/material";
import React from "react";
import EditDeleteModal from "./EditDeleteModal";

const WatchListModal = (props) => {
  const [modalopen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  const theme = useTheme();
  const style = {
    width: 150,
    boxShadow: 24,
  };
  const id = props.open ? "simple-popover" : undefined;
  const open = Boolean(props.open);
  const handleModalOpen = (type) => {
    setModalType(type);
    setModalOpen(true);
  };
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={props.open}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={style}
          bgcolor={theme.palette.background.alt}
          color={theme.palette.text.main}
        >
          <MenuItem onClick={() => handleModalOpen("edit")}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => handleModalOpen("delete")}>
            {" "}
            <Typography id="modal-modal-description" color={"error"}>
              Delete
            </Typography>
          </MenuItem>
        </Box>
      </Popover>
      <EditDeleteModal
        modalopen={modalopen}
        type={modalType}
        details={props.watchListDetail}
        handleClose={() => {
          setModalOpen(false);
          props.handleClose();
        }}
      />
    </>
  );
};

export default WatchListModal;
