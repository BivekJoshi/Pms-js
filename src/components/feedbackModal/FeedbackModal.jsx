import React from "react";
import { Autocomplete, Box, Button, Divider, Grid } from "@mui/material";
import { TextField, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFeedbackForm } from "../../hooks/feedback/FeedbackForm/useFeedbackForm";

const FeedbackModal = ({ onClose }) => {
  const theme = useTheme();
  const top100Films = [{ label: "Bug" }, { label: "Feedback" }];
  const { formik } = useFeedbackForm({ onClose });
  const handleFormSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: theme.palette.text.light,
            paddingBottom: ".5rem",
          }}
        >
          Problem Type
        </Typography>
        <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
      </div>
      <br />
      <Divider />
      <br />
      <Box component="form">
        <Autocomplete
          id="type"
          name="type"
          options={top100Films.map((film) => film.label)}
          required
          onChange={(event, newValue) => {
            // Extract the first letter from the selected label
            const firstLetter = newValue ? newValue[0] : '';
            formik.setFieldValue("type", firstLetter);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Problem Type"
              value={formik.values.type}
              onChange={formik.handleChange}
              error={
                formik.touched.type && Boolean(formik.errors.type)
              }
              helperText={
                formik.touched.type && formik.errors.type
              }
            />
          )}
        />
      </Box>
      <Grid sx={{ paddingTop: "1.5rem" }}>
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={5}
          variant="filled"
          sx={{ width: "100%" }}
          required
          value={formik.values.message}
          onChange={formik.handleChange}
          error={
            formik.touched.message && Boolean(formik.errors.message)
          }
          helperText={formik.touched.message && formik.errors.message}
        />
      </Grid>
      <br />
      <Divider />
      <br />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          type="submit"
          onClick={handleFormSubmit}
          sx={{ ml: 1, textTransform: "none" }}
          color="success"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          sx={{ ml: 1, textTransform: "none" }}
          color="error"
        >
          Cancel
        </Button>
      </Grid>
    </div>
  );
};

export default FeedbackModal;
