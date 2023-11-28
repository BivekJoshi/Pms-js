import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useWatchListForm } from "../../../hooks/watchList/useWatchListForm/useWatchListForm";
import toast from "react-hot-toast";

const WatchListMasterField = ({ onClose }) => {
  const { formik } = useWatchListForm({ onClose });

  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (formik.isValid) {
      formik.setTouched({
        watchlistName: true,
      });
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h4">Create New WatchList</Typography>
        <br />
        <Divider />
        <br />
        <TextField
          id="watchlistName"
          name="watchlistName"
          label="WatchList Name"
          placeholder="Enter watchlist name"
          fullWidth
          required
          value={formik.values.watchlistName}
          onChange={formik.handleChange}
          error={
            formik.touched.watchlistName && Boolean(formik.errors.watchlistName)
          }
          helperText={
            formik.touched.watchlistName && formik.errors.watchlistName
          }
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
        />
        <br /><br/>
        <Divider />
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          onClick={handleFormSubmit}
          sx={{ mt: 3, ml: 1 ,textTransform:'none'}}
          color="success"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ mt: 3, ml: 1 ,textTransform:'none'}}
          color="error"
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default WatchListMasterField;
