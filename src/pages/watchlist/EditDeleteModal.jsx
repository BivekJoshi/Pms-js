import * as React from "react";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useUpdateWatchListname } from "../../hooks/watchList/useWatchListForm/useWatchListForm";
// import { deleteWatchName } from "../../api/watchlist/watchlist-api";
import { useRemoveWatchListName } from "../../hooks/watchList/useWatchList";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const EditDeleteModal = (props) => {
  const theme = useTheme();
  const { formik } = useUpdateWatchListname(
    props.details?.name,
    props?.details?.id
  );
  const { mutate } = useRemoveWatchListName({});

  const handleEdit = () => {
    formik.handleSubmit();
    props?.handleClose();
  };

  const handleDelete = () => {
    // deleteWatchName(props?.details?.id);
    mutate(props?.details?.id);
    props.handleClose();
  };
  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.modalopen}
      >
        {props.type === "edit" ? (
          <>
            <DialogTitle sx={{ m: 0, p: 1 }} id="customized-dialog-title">
              {/* {props.type === "edit" ? "Edit Watch" : ""} */}
              Edit Watch
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={props.handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </>
        ) : (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#FF544E",
              }}
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
            <DialogTitle
              sx={{
                padding: "0px",
                display: "flex",
                justifyContent: "center",
                marginTop: "0",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 400 }}>
                Delete Alert
              </Typography>
            </DialogTitle>
          </>
        )}

        <DialogContent>
          {props.type === "delete" && (
            <>
              <DialogTitle
                sx={{
                  padding: "15px",
                  marginTop: "0",
                }}
              >
                <Typography variant="h5">
                  You're going to delete this Watchlist? 
                </Typography>
                <Typography variant="h5" sx={{display:"flex",justifyContent:'center',marginTop:"2px"}}>Are you sure ?</Typography>
              </DialogTitle>
            </>
          )}
          {props.type === "edit" && (
            <TextField
              sx={{ minWidth: "300px" }}
              id="watchlistName"
              name="watchlistName"
              label="Edit WatchList Name"
              placeholder="Enter watchlist name"
              value={formik.values.watchlistName}
              onChange={formik.handleChange}
              fullWidth
              error={
                formik.touched.watchlistName &&
                Boolean(formik.errors.watchlistName)
              }
              helperText={
                formik.touched.watchlistName && formik.errors.watchlistName
              }
              required
              variant="outlined"
              // autoFocus
              InputLabelProps={{
                shrink: true,
                style: { color: theme.palette.text.main },
              }}
            />
          )}
        </DialogContent>
        {props.type === "delete" && (
          <>
            <DialogActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={props?.handleClose}
                color="success"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                No, Keep It.
              </Button>
              <Button
                onClick={handleDelete}
                color="error"
                variant="contained"
                sx={{ textTransform: "none" }}
              >
                Delete Watchlist
              </Button>
            </DialogActions>
          </>
        )}
        {props.type === "edit" && (
          <DialogActions>
            <Button color="success" onClick={handleEdit} variant="contained">
              Save
            </Button>
          </DialogActions>
        )}
      </BootstrapDialog>
    </div>
  );
};
export default EditDeleteModal;
