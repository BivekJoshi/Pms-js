import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useWatchListDetailForm } from "../../../hooks/watchList/useWatchListForm/watchListDetailForm/useWatchListDetailForm";

const WatchListDetailField = ({onClose}) => {
  const { formik } = useWatchListDetailForm();

  const handleFormSubmit = () => {
    formik.handleSubmit();

    if (formik.isValid) {
      formik.setTouched({
        script: true,
      });
    } else {
      toast.error("Please make sure you have filled the form correctly");
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <TextField
          id="script"
          name="script"
          label="Script"
          placeholder="Enter script"
          fullWidth
          required
          value={formik.values.script}
          onChange={formik.handleChange}
          error={
            formik.touched.script && Boolean(formik.errors.script)
          }
          helperText={
            formik.touched.script && formik.errors.script
          }
          variant="outlined"
          autoFocus
          InputLabelProps={{ shrink: true }}
        />
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
            sx={{ mt: 3, ml: 1 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{ mt: 3, ml: 1 }}
            color="error"
          >
            Cancel
          </Button>
        </Grid>
    </Grid>
  );
};

export default WatchListDetailField;
